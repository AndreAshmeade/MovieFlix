import React, { useEffect, useState } from "react";
import icon from "../pages/images/icons8-imdb-96.png";
import IMAGE from "../pages/images/trailer-img.jpg";
import Footer from "./Footer";

const Trailer = () => {
  return (
    <>
      <section className="new_release top">
        <div className="container">
          <div className="items">
            <div className="left">
              <div className="img">
                <img id="imageRelease" src={IMAGE} alt="" />
              </div>
              <div className="heading">
                <h2>
                  <span></span> THE LAST EPISODES
                </h2>

                <h1 id="trailer_name">
                  The <br></br> WALKING DEAD
                </h1>
              </div>
              <div className="time flex">
                <span>TV Series</span>
                <i className="fas fa-circle"></i>
                <span>2010</span>
                <i className="fas fa-circle"></i>
                <a href="#" className="flex1">
                  <img src={icon} alt="icon" />
                </a>
                <i className="fas fa-circle"></i>
                <p>11 Seasons</p>

                <i className="fa fa-circle"></i>

                <button>Horror</button>
              </div>
              <p className="overview">
                The Walking Dead is an American post-apocalyptic horror drama
                television series based on the comic book series of the same
                name by Robert Kirkman, Tony Moore, and Charlie Adlard—together
                forming the core of The Walking Dead franchise.
              </p>
              <br></br>

              <span>Starring: Andrew Lincoln, Steven Yeun, Norman Reedus</span>
              <div className="button flex"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Trailer;
