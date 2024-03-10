import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import loginSlice, { setUserData } from "../features/Login/loginSlice";

function Login() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);

  const handleLoginEvent = (e) => {
    e.preventDefault();
    const userCredentials = { userName: "Prateek", uid: "22BCS14627" };
    dispatch(setUserData(userCredentials));
    console.log(userData);
  };
  
  
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
            <form
              onSubmit={(e) => {
                handleLoginEvent(e);
              }}
              className="col-12"
            >
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
              <button
                onClick={() => {
                  console.log(userData);
                }}
                class="btn btn-primary w-100 py-2 mb-2"
                type="submit"
              >
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
}

export default Login;
