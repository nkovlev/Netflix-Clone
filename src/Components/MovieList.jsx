import React, { useState, useEffect } from "react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import axios from "axios";

import MovieCard from "./MovieCard";

SwiperCore.use([Navigation, Pagination]);

const MovieList = ({ title,myList, addToMyList }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const apiKey = "07a58923108a39dacfeebe9fa77e366c";
      const endpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
      const response = await axios.get(endpoint);
      const moviesData = response.data.results;
      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="px-4 space-y-8 md:px-12">
      <div>
        <p className="text-white text-md md:text-xl font-semibold mb-4">{title}</p>
        <div className="flex space-x-3">
          {movies.map((movie) => (
            <div key={movie.id} style={{ flex: "0 0 auto" }}>
              <MovieCard data={movie} myList={myList} addToMyList={addToMyList}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
