import React, { useEffect, useState } from 'react';
import movies from '../movies.json';

const MainBillboard = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  const fetchRandomMovie = async () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
  };

  useEffect(() => {
    const getRandomMovie = async () => {
      const movie = await fetchRandomMovie();
      setRandomMovie(movie);
    };
    getRandomMovie();
  }, []);

  return (
<div className="relative w-screen h-screen z-1 overflow-hidden">
  {randomMovie && (
    <video
      autoPlay
      muted
      loop
      className="w-full h-full object-cover absolute top-0 left-0"
      src={randomMovie.videoUrl}
    ></video>
  )}
</div>
);
};

export default MainBillboard;
