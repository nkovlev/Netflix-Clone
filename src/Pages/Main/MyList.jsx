import React from 'react'
import MovieCard from '../../Components/MovieCard'

const MyList = ({ myList, addToMyList, removeFromMyList}) => {
  return (
    <div className='bg-black w-screen h-screen'>
        <div className="pt-20 pl-16">
        <h2 className='text-white text-3xl mb-24'>My List</h2>
        <div className="grid grid-cols-4 gap-2">
        {myList.map((movie) => (
          <MovieCard data={movie} myList={myList} addToMyList={addToMyList} removeFromMyList={removeFromMyList}/>
        ))}
      </div>
      </div>
    </div>
  )
}

export default MyList