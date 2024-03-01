import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import verify from './zod-schema'


function Login() {

  const [userData, setUserData] = useState({ uid: '', password: '', username: '', otp: '' })
  const [useFlag, setFlag] = useState(1)
  function handleChange(event) {
    let { name, value } = event.target;
    setUserData((prevCreds) => {
      return { ...userData, [name]: value }
    })
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
              {useFlag == 1 && (
                <>
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
                  <button className="btn btn-primary w-100 py-2 mb-2" type="submit"
                    onClick={() => {
                      if (verify(userData.uid)) {
                        axios.post('http://localhost:3000/login', {
                          uid: userData.uid,
                          password: userData.password
                        }).then((res) => {
                          console.log(res)
                          window.alert(res)
                        })
                      }
                      else {
                        window.alert('Invalid Uid')
                      }
                    }}
                  >
                    Log in
                  </button>
                  <hr />
                  <button
                    className="btn w-100 text-white py-2 mt-2"
                    type="submit"
                    style={{ backgroundColor: "#42b72a" }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#2a953b")
                    }
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#42b72a")}
                    onClick={() => {
                      setFlag(useFlag + 1)
                    }}
                  >
                    Create New Account
                  </button>
                </>
              )}
              {useFlag == 2 && (
                <>
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
                  <hr />
                  <button
                    className="btn w-100 text-white py-2 mt-2"
                    type="submit"
                    style={{ backgroundColor: "#42b72a" }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#2a953b")
                    }
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#42b72a")}
                    onClick={() => {
                      setFlag(useFlag + 1)
                      axios.post('http://localhost:3000/register', {
                        uid: userData.uid,
                        password: userData.password,
                        username: userData.username
                      }).then((res) => {
                        window.alert(res)
                      })
                    }}
                  >
                    Create
                  </button>
                </>
              )}
              {useFlag == 3 && (
                <>
                  <div>
                    <h1
                      id="Peerlink"
                      className="text-primary fw-bold"
                      style={{ fontFamily: "inherit" }}
                    >
                      Enter Otp
                    </h1>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingOtp"
                        placeholder=""
                        name="otp"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingOtp">Otp</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mb-2" type="submit"
                      onClick={() => {
                        axios.post('http://localhost:3000/otp', {
                          uid: userData.uid,
                          otp: userData.otp
                        }).then((res) => {
                          window.alert(res)
                        })
                      }}
                    >
                      Verify
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;