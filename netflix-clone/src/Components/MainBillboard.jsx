import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const MainBillboard = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  const fetchRandomMovie = async () => {
    const apiKey = '07a58923108a39dacfeebe9fa77e366c';
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    try {
      const response = await axios.get(endpoint);
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      return randomMovie;
    } catch (error) {
      console.error('Error fetching random movie:', error);
    }
  };

  const fetchVideoInfo = async (movieId) => {
    const apiKey = '07a58923108a39dacfeebe9fa77e366c';
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
    try {
      const response = await axios.get(endpoint);
      const videos = response.data.results;
      if (videos.length > 0) {
        const videoInfo = videos[0];
        return videoInfo;
      }
    } catch (error) {
      console.error('Error fetching video info:', error);
    }
  };

  useEffect(() => {
    const getRandomMovie = async () => {
      const movie = await fetchRandomMovie();
      const videoInfo = await fetchVideoInfo(movie.id);
      movie.videoInfo = videoInfo;
      setRandomMovie(movie);
    };
    getRandomMovie();
  }, []);

  return (
    <div className='relative w-full'>
      {randomMovie && randomMovie.videoInfo && (
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${randomMovie.videoInfo.key}`}
            playing={true}
            muted={true}
            controls={false}
            loop={true}
            width='100%'
            height='100%'
            style={{ objectFit: 'cover' }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  controls: 0,
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
  
};

export default MainBillboard;
