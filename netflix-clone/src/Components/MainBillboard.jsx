import React, { useEffect, useState, useRef } from 'react';
import movies from '../movies.json';
import { FaPlay } from 'react-icons/fa'
import { BiInfoCircle } from 'react-icons/bi'
import { GoMute, GoUnmute } from 'react-icons/go'


const MainBillboard = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

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

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative w-full h-screen">
      {randomMovie && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            className="w-full h-full object-cover absolute top-0 left-0"
            src={randomMovie.videoUrl}
          ></video>
          <div className="absolute top-[40%] md:top-[40%] pl-4 md:pl-16 w-full">
            <div>
              <p className="text-white text-6xl font-bold mb-3">{randomMovie.title}</p>
              <p className="text-white text-xl font-light max-w-xl mb-5">{randomMovie.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button className='bg-white flex items-center text-xl px-10 py-3 gap-3 rounded hover:bg-opacity-60'><FaPlay className='text-xl' onClick={handleVideoClick}/> Play</button>
                <button className='bg-gray-500 bg-opacity-50 text-white text-2xl font-sans gap-3 px-7 py-2 flex items-center rounded hover:bg-opacity-20'><BiInfoCircle className='fill-white text-3xl font-bold'/>More Info</button>
              </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full border-white border-2 flex justify-center items-center mr-3 hover:bg-white hover:bg-opacity-30" onClick={handleMuteToggle}>
                    {isMuted ? <GoMute className='fill-white' /> : <GoUnmute className='fill-white' />}
                  </div>
                  <span className='h-12 w-1 bg-slate-500'></span>
                  <div className="h-12 bg-gray-300 bg-opacity-30 flex items-center text-white pr-16 pl-4">{randomMovie.min_year}+</div>
                </div> 
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainBillboard;
