import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Navbar() {
  const userData = useSelector((state) => state.login);

  return (
    <section className="bg-dark py-2">
      <div className="container-fluid">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h1 className="text-white w-auto">PeerLink</h1>
          <motion.div
            className="navbar navbar-dark fixed-bottom d-md-none d-flex row align-items-center z-3 shadow-lg bg-dark"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="d-grid col">
              <div className="row d-flex align-items-center justify-content-around">
                <div className="col-auto d-flex flex-column align-items-center justify-content-center">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/public/images/home.png"
                    width={30}
                    height={30}
                  />
                  <p className="text-white">Home</p>
                </div>

                <div className="col-auto d-flex flex-column align-items-center justify-content-center">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/public/images/chat.png"
                    width={30}
                    height={30}
                  />
                  <p className="text-white">Chats</p>
                </div>

                <div className="col-auto d-flex flex-column align-items-center justify-content-center">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/public/images/explore.png"
                    width={30}
                    height={30}
                  />
                  <p className="text-white">Explore</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="row gap-2 d-none d-md-flex align-items-center justify-content-between">
            <div className="col-auto d-flex flex-column align-items-center justify-content-center">
              <img
                style={{ cursor: "pointer" }}
                src="/public/images/home.png"
                width={40}
                height={40}
              />
              <p className="text-white">Home</p>
            </div>

            <div className="col-auto d-flex flex-column align-items-center justify-content-center">
              <img
                style={{ cursor: "pointer" }}
                src="/public/images/chat.png"
                width={40}
                height={40}
              />
              <p className="text-white">Chats</p>
            </div>

            <div className="col-auto d-flex flex-column align-items-center justify-content-center">
              <img
                style={{ cursor: "pointer" }}
                src="/public/images/explore.png"
                width={40}
                height={40}
              />
              <p className="text-white">Explore</p>
            </div>
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
