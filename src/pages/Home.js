import React, { useState, useEffect, useReducer } from "react";
import MovieCard from "../components/MovieCard";
import Trailer from "../components/Trailer";
import Zombie from "../components/Zombie";
import CoverPage from "../components/CoverPage";
import logo from "./images/logo.png";
import Carousel from "@itseasy21/react-elastic-carousel";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?&api_key=ceae92048c508e3990359820f14f78ba ";

const DISCOVER =
  "https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=ceae92048c508e3990359820f14f78ba";
const RATED =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=ceae92048c508e3990359820f14f78ba ";
const UPCOMING =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2021&release_date.lte=2023&api_key=ceae92048c508e3990359820f14f78ba";
const Home = () => {
  //Header Fadding
  let menu = document.getElementById("menu");

  const menutoggle = () => {
    if (menu.style.maxHeight === "0px") {
      menu.style.maxHeight = "200px";
    } else {
      menu.style.maxHeight = "1px";
    }
  };

  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
  });

  //Movie API
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(DISCOVER)
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);

  const [ratedMovie, setRatedMovies] = useState([]);
  useEffect(() => {
    fetch(RATED)
      .then((res) => res.json())
      .then((data) => {
        setRatedMovies(data.results);
      });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <section className="home">
      <div className="headerbg">
        <header>
          <div className="container">
            <div className="navbar flex1">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <span onClick={menutoggle}></span>
            </div>
          </div>
        </header>
        <div className="home_content mtop">
          <div className="container">
            <div className="show_container">
              <CoverPage />
            </div>
          </div>
        </div>
      </div>
      <Zombie />
      <section className="popular mtop">
        <div class="container">
          <div className="heading flex1">
            <h2>Most Popular</h2>
          </div>
          <Carousel breakPoints={breakPoints}>
            {popularMovies.map((movieReq) => (
              <MovieCard key={movieReq} {...movieReq} />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="popular mtop">
        <div className="container">
          <div className="heading flex1">
            <h2>Top Rated</h2>
          </div>
          <Carousel breakPoints={breakPoints}>
            {ratedMovie.map((movie) => (
              <MovieCard key={movie} {...movie} />
            ))}
          </Carousel>
        </div>
        <Trailer />
      </section>
    </section>
  );
};

export default Home;
