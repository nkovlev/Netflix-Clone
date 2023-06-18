import React from 'react'

const MyList = ({ myList }) => {
  return (
    <div className='bg-black w-screen h-screen'>
        <div className="pt-20 pl-16">
        <h2 className='text-white text-3xl mb-24'>My List</h2>
        <div className="flex overflow-x-auto">
        {myList.map((movie) => (
          <div
            key={movie.id}
            className="group relative transition-opacity w-60 mr-4 flex-shrink-0"
          >
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
      </div>
    </div>
  )
}

export default MyList