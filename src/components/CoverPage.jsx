import React, { useEffect, useState } from "react";
import icon from "../pages/images/icons8-imdb-96.png";

const CoverPage = () => {
  return (
    <>
      <section className="new_release top">
        <div className="container">
          <div className="heading">
            <h2>
              <span></span> TOP FEATURED
            </h2>

            <h1 id="cover_name">
              Color Out Of Space <br></br>
            </h1>
          </div>
          <div className="time flex">
            <span>Movie</span>
            <i className="fas fa-circle"></i>
            <span>2019</span>
            <i className="fas fa-circle"></i>
            <a href="#" className="flex1">
              <img src={icon} alt="icon" />
            </a>
            <i className="fa fa-circle"></i>

            <button>Sci-Fi</button>
          </div>
          <p className="overview">
            A secluded farm is struck by a strange meteorite which
            <p></p>
            has apocalyptic consequences for the family living there
            <p></p>
            and possibly the world.
          </p>
          <br></br>
          <span>
            Starring: Nicolas Cage, Joely Richardson, Madeleine Arthur
          </span>
          <div className="button flex"></div>
        </div>
      </section>
    </>
  );
};
export default CoverPage;
