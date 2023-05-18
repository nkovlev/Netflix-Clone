import React, { useState, useEffect, useRef } from 'react';
import movies from '../movies.json';
import { BsPlayFill } from 'react-icons/bs';

const MovieList = ({ title }) => {
const [activeIndex, setActiveIndex] = useState(null);
const [playVideo, setPlayVideo] = useState(false);
const videoRef = useRef(null);

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

return (
    <div className="px-4 mt-4 space-y-8">
        <h2 className="text-white text-md md:text-xl lg:text-2xl font-semibold">{title}</h2>
        <div className="flex gap-6">
            {movies.map((movie, index) => (
            <div key={index} className="group col-span relative" onMouseEnter={()=> handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                >
                <img className="w-full h-[12vw] object-cover mb-4 cursor-pointer duration transition shadow-xl rounded group-hover:opacity-90 sm:group-hover:opacity-0 delay-300" src={movie.thumbnailUrl} alt={movie.title} />
                {activeIndex === index && (
                <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[4vw] group-hover:opacity-100">
                    <img className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" src={movie.thumbnailUrl} alt={movie.title} />
                    {playVideo && (
                    <video ref={videoRef} autoPlay muted loop className="w-full h-full object-cover absolute top-0 left-0" src={movie.videoUrl}></video>
                    )}
                    <div className="z-10 bg-zinc-900 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                        <div className="flex flex-row items-center gap-3">
                            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300" onClick={handleVideoClick}
                                >
                                <BsPlayFill size={30} />
                            </div>
                        </div>
                        <div className="flex items-center mt-4 mb-4 gap-2">
                            <p className="text-green-400 font-semibold">
                            New <span className="text-white">2023</span>
                            </p>
                            <div className='text-white px-2 border-gray-600 border'>{movie.min_year}+</div>
                            <p className='text-white font-light'>{movie.duration}</p>
                        </div>
                        <p className='text-white font-light'>{movie.genre}</p>
                    </div>
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
    );
};

export default MovieList;
