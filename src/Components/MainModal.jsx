import React from 'react';
import { VscClose } from 'react-icons/vsc'
import { FaPlay } from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineLike } from 'react-icons/ai'
import { GoMute, GoUnmute } from 'react-icons/go'

const MainModal = ({ randomMovie, isMuted, handleCloseModal, handleModalVideoClick, handleMuteToggle, showAddToList, showLike, setShowAddToList, setShowLike, modalVideoRef }) => {
  return (
    <div className="pt-9 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 animate-fade-in rounded z-10">
      <div className="bg-neutral-800 w-3/6 h-full z-12">
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
                  onMouseLeave={() => setShowAddToList(false)}
                />
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
        <div className="w-full flex">
          <div className="ml-10 mt-3">
            <div className="flex items-center gap-2">
              <p className='text-green-500 text-md font-semibold'>{randomMovie.match}% Match</p>
              <p className='text-zinc-400'>{randomMovie.year}</p>
              <p className='border border-zinc-400 rounded-sm text-xs text-white px-1 text-center'>{randomMovie.quality}</p>
            </div>
            <p className='text-white text-sm border border-zinc-400 px-1 text-center w-10 mt-2'>{randomMovie.min_year}+</p>
          </div>
        </div>
        <div className="w-full ml-10 mt-8">
          <p className='text-white text-xl'>About <span className='font-semibold'>{randomMovie.title}</span></p>
          <div className="w-2/3 mt-1">
            <span className="text-zinc-400 text-sm mr-1">Creators:</span>
              {randomMovie.creators.map((actor, index) => (
                <span key={index} className='text-white text-sm hover:underline'>
                  {actor}
                  {index !== randomMovie.cast.length - 1 && ', '}
                </span>
              ))}
            </div>
          <div className="w-2/3 mt-1">
            <span className="text-zinc-400 text-sm mr-1">Cast:</span>
              {randomMovie.cast.map((actor, index) => (
                <span key={index} className='text-white text-sm hover:underline'>
                  {actor}
                  {index !== randomMovie.cast.length - 1 && ', '}
                </span>
              ))}
            </div>
            <p className='text-zinc-400 text-sm mr-1 mt-1'>Genres: <span className='text-white hover:underline'>{randomMovie.genre}</span></p>
            <div className="flex items-center gap-2 mt-1">
              <p className='text-zinc-400 text-sm'>Maturity rating</p>
              <p className='text-white text-sm border border-zinc-400 px-1 text-center w-10 mt-2'>{randomMovie.min_year}+</p>
              <p className='text-white text-sm'>Recommended for ages <span>{randomMovie.min_year}</span> and up</p>
            </div>
          </div> 
      </div>
    </div>
  );
};

export default MainModal;
