import React, { useEffect, useState } from 'react';
import movies from '../movies.json';
import {FaPlay} from 'react-icons/fa'

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
    <div className="relative w-screen h-screen">
      {randomMovie && (
        <>
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover absolute top-0 left-0"
            src={randomMovie.videoUrl}
          ></video>
          <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
            <div>
              <p className="text-white text-5xl font-bold mb-3">{randomMovie.title}</p>
              <p className="text-white text-xl font-classic max-w-xl mb-5">{randomMovie.description}</p>
            </div>
            <div className="flex">
              <div className="">
                <button className='bg-white flex items-center text-xl px-4 py-2 gap-2'><FaPlay/> Play</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainBillboard;
