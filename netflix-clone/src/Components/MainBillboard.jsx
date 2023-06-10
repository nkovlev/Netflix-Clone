import React, { useEffect, useState, useRef } from 'react';
import movies from '../movies.json';
import { FaPlay } from 'react-icons/fa'
import { BiInfoCircle } from 'react-icons/bi'
import { GoMute, GoUnmute } from 'react-icons/go'
import { VscClose } from 'react-icons/vsc'
import { AiOutlinePlus, AiOutlineLike } from 'react-icons/ai'

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
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative w-full h-screen">
      {randomMovie && (
        <>
          <div className={`w-screen h-full object-cover absolute top-0 left-0 ${showModal ? "hidden" : ""}`}>
            <video
              ref={mainVideoRef}
              autoPlay
              muted={isMuted}
              loop
              className={`w-full h-full object-cover absolute top-0 left-0`}
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
                  <BiInfoCircle className='fill-white text-3xl font-bold'/>
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
            <div className=" pt-9 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 animate-fade-in rounded z-10">
              <div className="bg-white w-3/6 h-full z-12">
                <div className="relative aspect-w-16 aspect-h-9 flex">
                  <video
                    ref={modalVideoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    className="w-full object-cover z-2"
                    src={randomMovie.videoUrl}
                  ></video>
                  <VscClose onClick={handleCloseModal} className="absolute top-4 right-4 w-8 h-8 fill-white bg-zinc-800 rounded-full z-3" />
                  <div className="absolute top-[55%] left-0 pl-10 w-full">
                    <p className="text-white text-4xl font-bold mb-3">{randomMovie.title}</p>
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className='bg-white flex items-center text-xl px-10 py-2 gap-3 rounded hover:bg-opacity-60' onClick={handleModalVideoClick}>
                        <FaPlay className='text-xl' />
                        Play
                      </button>
                      <AiOutlinePlus className='fill-white w-10 h-10 bg-zinc-700 rounded-full border-2' 
                      onMouseEnter={() => setShowAddToList(true)}
                      onMouseLeave={() => setShowAddToList(false)}/>
                      {showAddToList && (     
                          <div className="absolute mb-24 left-36 transform px-3 py-2 bg-zinc-200 rounded-md text-black text-xl font-semibold whitespace: nowrap">
                            Add to My List
                          </div>
                      )}
                      <div className="w-10 h-10 bg-zinc-700 rounded-full border-2 flex items-center justify-center">
                      <AiOutlineLike className='fill-white w-5 h-5'
                      
                        onMouseEnter={() => setShowLike(true)}
                        onMouseLeave={() => setShowLike(false)}
                      />
                      {showLike && (     
                          <div className="absolute mb-24 left-46 transform px-3 py-2 bg-zinc-200 rounded-md text-black text-xl font-semibold whitespace: nowrap">
                            I like this
                          </div>
                      )}
                      
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-full border-gray-400 border-2 flex justify-center items-center mr-10 hover:bg-black hover:bg-opacity-30 hover:border-white hover:fill-white" onClick={handleMuteToggle}>
                      {isMuted ? <GoMute className='fill-gray-400' /> : <GoUnmute className='fill-gray-400' />}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainBillboard;
