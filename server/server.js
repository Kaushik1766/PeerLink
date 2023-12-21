import pg from 'pg';

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// console.log(PGHOST)
const db = new pg.Client({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        require: true
    }
});

db.connect();

async function getVersion() {
    console.log((await db.query('select version()')).rows);
}

getVersion();