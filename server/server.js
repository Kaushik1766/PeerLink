import 'dotenv/config'
import pg from 'pg';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt, { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';

let saltRounds = 4;
const app = express();
app.use(cors());
const port = 3000;
app.use(bodyParser.json());

console.log(process.env.connectionString);

const db = new pg.Client({
    connectionString: process.env.connectionString,
});

db.connect();

app.post('/register', async (req, res) => {
    console.log(req.body);
    let { uid, password, username } = req.body;
    if ((await db.query(`select * from users where uid = '${uid}'`)).rows[0] == null) {
        bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
            if (err) {
                console.log(err);
                res.send('error occured');
            }
            else {

                const mailTransporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: process.env.user,
                        pass: process.env.pass
                    }
                })

                let otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
                let details = {
                    from: process.env.user,
                    to: 'noobitanobi176@gmail.com',
                    subject: 'OTP verification',
                    text: `Your OTP from PeerLink is ${otp}.`
                }
                mailTransporter.sendMail(details, async (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        await db.query(`insert into users(uid,password, otp, username) values('${uid}', '${hashedPassword}', ${otp},'${username}')`);
                        res.send('successfully registered')
                        console.log('sent successfully');
                    }
                })
            }
        })

    }
    else {
        res.send('user already registered');
    }
})

app.post('/otp', async (req, res) => {
    let { uid, otp } = req.body;
    let storedOtp = (await db.query(`select * from users where uid = '${uid}'`)).rows[0].otp;
    if (storedOtp == otp) {
        await db.query(`update users set verified = true where uid = '${uid}'`)
        res.send('email verified')
    }
    else {
        res.send('wrong otp')
    }
})

app.post('/login', async (req, res) => {
    let { uid, password } = req.body;
    let hashedPassword = ((await db.query(`select * from users where uid = '${uid}'`)).rows[0])
    hashedPassword = hashedPassword.password
    if ((await db.query(`select * from pendingrequests where uid = '${uid}'`)))
        bcrypt.compare(password, hashedPassword, async (err, result) => {
            if (err) {
                console.log('error occured');
                res.send('error occured')
            }
            if (result) {
                const sessionId = uuidv4();
                await db.query(`update users set sessionid = '${sessionId}' where uid = '${uid}'`);
                res.send(sessionId);
            }
            else {
                res.send('invalid credentials')
            }
        })
})

app.post('/session', async (req, res) => {
    let user = '';
    if (req.body.sessionID) {
        let prevId = (await db.query(`select username from users where sessionID = '${req.body.sessionID}'`));
        prevId = prevId.rows[0];
        console.log(prevId);
        if (prevId != null) {
            user = prevId.username;
            console.log(user);
            res.send(user);
        }
        else {
            res.send('null')
        }
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});