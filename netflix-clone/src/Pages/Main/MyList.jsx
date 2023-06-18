import React from 'react'

const MyList = ({ myList }) => {
  return (
    <div className='bg-black w-screen h-screen'>
        <h2>My List</h2>
      {myList.map((movie) => (
        <div key={movie.id}>
          <h3 className='text-white'>{movie.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default MyList