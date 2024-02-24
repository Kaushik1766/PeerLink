import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const userData = useSelector((state) => state.login);

  return (
    <section className="bg-dark py-2">
      <div className="container-fluid">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h1 className="text-white w-auto">PeerLink</h1>

          <div className="navbar navbar-dark fixed-bottom d-md-none d-flex row align-items-center z-3 shadow-lg bg-dark">
            <div className="gap-2 d-grid col">
              <div className="row gap-0 d-flex justify-content-around">
                <button className="col-3 btn btn-outline-light">Home</button>
                <button className="col-3 btn btn-outline-light">Chats</button>
                <button className="col-3 btn btn-outline-light">Explore</button>
              </div>
            </div>
          </div>
          <div className="row gap-2 d-none d-md-flex align-items-center justify-content-between">
            <button className="col btn btn-light ">Home</button>
            <button className="col btn btn-light ">Chats</button>
            <button className="col btn btn-light ">Explore</button>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col text-white">
              <h6>{userData.userName}</h6>
              <h6>{userData.uid}</h6>
            </div>
            <div className="col">
              <img
                src="/public/images/AkshayKumar.jpg"
                className="rounded-circle"
                width={70}
                height={70}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
