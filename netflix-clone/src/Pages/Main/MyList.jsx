import React from 'react'

const MyList = ({ myList }) => {
  return (
    <div className='bg-black w-screen h-screen'>
        <h2>My List</h2>
      {myList.map((movie) => (
        <div className="group col-span relative transition-opacity w-60 mt-10 mb-40 flex">
        <div className="overflow-hidden rounded-md shadow-xl group-hover:shadow-2xl">
        <img
          className="h-full w-full object-cover cursor-pointer duration transition transform scale-100 group-hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      </div>
      ))}
    </div>
  )
}

export default MyList