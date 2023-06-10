import React, { useState, useEffect, useRef } from "react";
import { BsPlayFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import axios from "axios";

const MovieList = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const scrollContainerRef = useRef(null);

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

  const fetchGenres = async () => {
    try {
      const apiKey = "07a58923108a39dacfeebe9fa77e366c";
      const endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      const response = await axios.get(endpoint);
      const genresData = response.data.genres;
      setGenres(genresData);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
  

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    let timer;
    if (activeIndex !== null) {
      timer = setTimeout(() => {
        setPlayVideo(true);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
      setPlayVideo(false);
    };
  }, [activeIndex]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = (containerWidth / 5) * 5;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      if (scrollContainerRef.current.scrollLeft === 0) {
        scrollContainerRef.current.scrollTo({
          left: scrollContainerRef.current.scrollWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = (containerWidth / 5) * 5;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      if (
        scrollContainerRef.current.scrollLeft + containerWidth ===
        scrollContainerRef.current.scrollWidth
      ) {
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const getGenreText = (genreIds) => {
    const movieGenres = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    });
  
    return movieGenres.map((genre, index) => (
      <span key={index}>
        {genre}
        {index !== movieGenres.length - 1 && (
          <span className=" w-1 h-1 bg-gray-400 rounded-full inline-block mx-1"></span>
        )}
      </span>
    ));
  };
  
  

  return (
    <div className="px-4 mt-4 space-y-8 pb-4">
      <h2 className="text-white text-md md:text-xl lg:text-2xl font-semibold">
        {title}
      </h2>
      <div className="relative ">
        <div
          className="flex space-x-6 overflow-x-auto"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex items-center gap-6">
            {movies.map((movie, index) => (
              <div
                key={index}
                className={`group col-span relative transition-opacity w-60 pt-10 pb-5 ${
                  index === activeIndex ? "opacity-100" : "opacity-90"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="overflow-hidden rounded-md shadow-xl group-hover:shadow-2xl">
                  <img
                    className="h-full w-full object-cover cursor-pointer duration transition transform scale-100 group-hover:scale-105"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                {activeIndex === index && (
                  <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[4vw] group-hover:opacity-100 animate-fade-in">
                    <img
                      className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-36"
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                    {playVideo && (
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover absolute top-0 left-0"
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                      ></video>
                    )}
                    <div className="z-10 bg-zinc-900 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                      <div className="flex flex-row items-center gap-3">
                        <div
                          className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                          onClick={handleVideoClick}
                        >
                          <BsPlayFill size={30} />
                        </div>
                      </div>
                      <p className="text-white">{movie.title}</p>
                      <div className="flex items-center mt-4 mb-4 gap-2">
                        <p className="text-green-400 font-semibold">
                          {movie.vote_average}
                        </p>
                        <div className="text-white px-2 border-gray-600 border">
                          {movie.adult === 'false' ? '16+' : '18+'}
                        </div>
                      </div>     
                        <p className="text-white font-light">{getGenreText(movie.genre_ids)}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {activeIndex === null && (
          <div className="absolute top-2/4 flex items-center justify-between w-full px-4 z-10">
            <BsChevronLeft
              size={24}
              className="text-white cursor-pointer transition duration-300 hover:text-gray-300 "
              onClick={prevSlide}
            />
            <BsChevronRight
              size={24}
              className="text-white cursor-pointer transition duration-300 hover:text-gray-300"
              onClick={nextSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
