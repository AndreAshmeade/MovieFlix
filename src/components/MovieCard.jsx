import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ title, release_date, poster_path, backdrop_path }) => {
  if (poster_path === null) {
    return backdrop_path;
  }

  return (
    <>
      <div className="item">
        <div className="box">
          <div className="imgbox">
            <img className="imageslide" src={API_IMG + poster_path} alt="" />
          </div>

          <div className="content">
            <i id="playbtn" className="fas fa-play"></i>
          </div>
          <div className="text">
            <h1 id="title">{title}</h1>
            <div className="time flex">
              <span>Release Date : {release_date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
