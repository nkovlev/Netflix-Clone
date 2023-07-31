import React, { useState, useEffect, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import axios from "axios";

const MovieCard = ({ data, myList, addToMyList, removeFromMyList }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const [genres, setGenres] = useState([]);
  const [showCheckMark, setShowCheckMark] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setPlayVideo(true);
    }, 1500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setPlayVideo(false);
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

  const getGenreText = (genreIds) => {
    const movieGenres = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    });

    return movieGenres.map((genre, index) => (
      <span key={index}>
        {genre}
        {index !== movieGenres.length - 1 && (
          <span className="w-1 h-1 bg-gray-400 rounded-full inline-block mx-1"></span>
        )}
      </span>
    ));
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleAddToMyList = (data) => {
    addToMyList(data);
  };

  const handleRemoveFromMyList = (id) => {
    removeFromMyList(data.id);
  };

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="Movie" draggable={false} className="cursor-pointer object-cover transition duration shadow-xl rounded-md delay-300 w-full h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw]" />
      <div className={`opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100`}>
        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="Movie" draggable={false} className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw]" />
        {playVideo && (
          <video ref={videoRef} autoPlay muted loop className="w-full h-full object-cover absolute top-0 left-0" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"></video>
        )}

        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300" onClick={handleVideoClick}>
              <BsPlayFill size={30} />
            </div>
            {myList.some((item) => item.id === data.id) ? (
              <AiOutlineCheck className="fill-white w-10 h-10 bg-zinc-700 rounded-full border-2" onClick={() => {
                handleRemoveFromMyList(data.id);
                setShowCheckMark(false);
              }} />
            ) : (
              <AiOutlinePlus className="fill-white w-10 h-10 bg-zinc-700 rounded-full border-2" onClick={() => {
                handleAddToMyList(data);
                setShowCheckMark(true);
              }} />
            )}
          </div>
          <div className="flex items-center mt-4 mb-4 gap-2">
            <p className="text-green-400 font-semibold">{data.vote_average.toFixed(1)}</p>
            <div className="text-white px-2 border-gray-600 border">{data.adult === "false" ? "16+" : "18+"}</div>
          </div>
          <p className="text-white font-light">{getGenreText(data.genre_ids)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
