import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream

function Login() {
	// test
	return (
		<section id="Login">
			<div className="container">
				<div className="row justify-content-evenly align-content-center vh-100">
					<div className="mt-5 col-4">
						<h1
							className="text-primary fw-bold"
							style={{ fontFamily: "inherit" }}
						>
							PeerLink
						</h1>
						<h5>
							PeerLink helps you connect and share <br />
							with the people in your University.
						</h5>
					</div>
					<div className="z-3 shadow-lg p-3 pt-4 mb-4 bg-white rounded col-4">
						<form onClick={(e) => {
							window.alert('login')
							e.preventDefault()
						}} className="col-12">
							<div class="form-floating mb-3">
								<input
									type="email"
									class="form-control"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label for="floatingInput">UID</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="floatingPassword"
									placeholder="Password"
								/>
								<label for="floatingPassword">Password</label>
							</div>
							<button class="btn btn-primary w-100 py-2 mb-2" type="submit">
								Log in
							</button>
							<hr />
							<button
								class="btn w-100 text-white py-2 mt-2"
								type="submit"
								style={{ backgroundColor: "#42b72a" }}
								onMouseOver={(e) =>
									(e.target.style.backgroundColor = "#2a953b")
								}
								onMouseOut={(e) => (e.target.style.backgroundColor = "#42b72a")}
							>
								Create Account
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
=======
import verify from './zod-schema'
import { useNavigate } from 'react-router-dom';


function Login() {
  
  const nav = useNavigate();
  const [userData,setUserData] = useState({uid:'', password:'',username:''})
  const [useFlag,setFlag] = useState(true)
  function handleChange(event) {
    let { name, value } = event.target;
    setUserData((prevCreds) => {
        return { ...userData, [name]: value }
    })
  }
  function LoginButton(){
    if(useFlag){
      return(
        <button className="btn btn-primary w-100 py-2 mb-2" type="submit"
          onClick={()=>{
          //console.log(floatingInput)
          if(verify(userData.uid)){
          //console.log("sending response")
          axios.post('http://localhost:3000/login',{
            uid: userData.uid,
            password: userData.password          
          }).then((res)=>{
            window.alert(res)
          })
        }         
      }}
      >
      Log in
      </button>
      )
    }
    else{
      return (
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder=""
            name="username"
            onChange={handleChange}
          />
        <label htmlFor="floatingUsername">Username</label>
      </div>
      )
    }
  }
  function CreateAccountButton(){
    if(useFlag){
      return(
        <button
          className="btn w-100 text-white py-2 mt-2"
          type="submit"
          style={{ backgroundColor: "#42b72a" }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#2a953b")
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#42b72a")}
          onClick={()=>{
            setFlag(!useFlag)
            //nav('/otp.jsx')
          }}
        >
          Create Account
        </button>
      )
    }
    else{
      return(
        <button
          className="btn w-100 text-white py-2 mt-2"
          type="submit"
          style={{ backgroundColor: "#42b72a" }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#2a953b")
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#42b72a")}
          onClick={()=>{
            axios.post('http://localhost:3000/login',{
            uid: userData.uid,
            password: userData.password,
            username: userData.username          
          }).then((res)=>{
            window.alert(res)
          })
          nav('/otp.jsx')}}
        >
          Create Account
        </button>
      )
    }
  }
  return (
    <section id="Login">
      <div className="container">
        <div className="row justify-content-evenly align-content-center vh-100">
          <div className="mt-5 col-4">
            <h1
            id="Peerlink"
              className="text-primary fw-bold"
              style={{ fontFamily: "inherit" }}
            >
              PeerLink
            </h1>
            <h5>
              PeerLink helps you connect and share <br />
              with the people in your University.
            </h5>
          </div>
          <div className="z-3 shadow-lg p-3 pt-4 mb-4 bg-white rounded col-4">
            <form className="col-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                  name="uid"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">UID</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder=""
                  name="password"
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <LoginButton></LoginButton>
              <hr />
              <CreateAccountButton></CreateAccountButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
>>>>>>> Stashed changes
}

export default Login;