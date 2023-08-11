import React, { useEffect, useState } from "react";
import icon from "../pages/images/icons8-imdb-96.png";
import IMAG from "../pages/images/dead.jpg";

const Zombie = () => {
  return (
    <>
      <section className="new_release top">
        <div className="container">
          <div className="items">
            <div className="left">
              <div className="img">
                <img id="imageRelease" src={IMAG} alt="" />
              </div>
              <div className="heading">
                <h2>
                  <span></span> NEW RELEASE
                </h2>

                <h1 id="trailer_name">
                  Evil Dead Rise <br></br>
                </h1>
              </div>
              <div className="time flex">
                <span>Movie</span>
                <i className="fas fa-circle"></i>
                <span>2023</span>
                <i className="fas fa-circle"></i>
                <img src={icon} alt="icon" />
                <i className="fa fa-circle"></i>

                <button>Horror</button>
              </div>
              <p className="overview">
                A reunion between two estranged sisters gets cut short by the
                rise of flesh-possessing demons, thrusting them into a primal
                battle for survival as they face the most nightmarish version of
                family imaginable.
              </p>
              <br></br>
              <span>
                Starring: Mirabai PeaseRichard, Crouchley, Anna-Maree Thomas
              </span>
              <div className="button flex"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Zombie;
