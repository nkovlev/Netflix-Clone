import React, { useEffect, useState, useRef } from 'react';
import movies from '../movies.json';
import { FaPlay } from 'react-icons/fa'
import { BiInfoCircle } from 'react-icons/bi'
import { GoMute, GoUnmute } from 'react-icons/go'
import MainModal from './MainModal';

const MainBillboard = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const mainVideoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [showAddToList, setShowAddToList] = useState(false);
  const [showLike, setShowLike] = useState(false);

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

  const handleMainVideoClick = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.requestFullscreen();
    }
  };

  const handleModalVideoClick = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.requestFullscreen();
    }
  };

  const handleMoreInfoClick = () => {
    setShowModal(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div className="relative w-screen h-screen">
      {randomMovie && (
        <>
          <div className={`w-screen h-screen absolute top-0 left-0 ${showModal ? "hidden" : ""}`}>
            <video
              ref={mainVideoRef}
              autoPlay
              muted={isMuted}
              loop
              className={`w-screen h-screen lg:object-cover xs:object-contain absolute top-0 left-0 `}
              src={randomMovie.videoUrl}
            ></video>
          </div>
          <div className="absolute top-[40%] md:top-[40%] pl-4 md:pl-16 w-full">
            <div>
              <p className="text-white text-6xl font-bold mb-3">{randomMovie.title}</p>
              <p className="text-white text-xl font-light max-w-xl mb-5">{randomMovie.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button className='bg-white flex items-center text-xl px-10 py-3 gap-3 rounded hover:bg-opacity-60' onClick={handleMainVideoClick}>
                  <FaPlay className='text-xl' />
                  Play
                </button>
                <button className='bg-gray-500 bg-opacity-50 text-white text-2xl font-sans gap-3 px-7 py-2 flex items-center rounded hover:bg-opacity-20' onClick={handleMoreInfoClick}>
                  <BiInfoCircle className='fill-white text-3xl font-bold' />
                  More Info
                </button>
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
          
          {showModal && (
            <MainModal
              randomMovie={randomMovie}
              isMuted={isMuted}
              handleCloseModal={handleCloseModal}
              handleModalVideoClick={handleModalVideoClick}
              handleMuteToggle={handleMuteToggle}
              showAddToList={showAddToList}
              showLike={showLike}
              setShowAddToList={setShowAddToList}
              setShowLike={setShowLike}
              modalVideoRef={modalVideoRef}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MainBillboard;
