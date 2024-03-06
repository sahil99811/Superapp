

import PropTypes from 'prop-types';
import { useEffect,useState } from 'react';

export default function MovieCard({category}) {
  const [moviesData, setMoviesData] = useState([]);
  const genre = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];


  const fetchData = () => {
   
    const genreItem = genre.find((item) => item.name === category);
    
    if (genreItem) {
      const genreId = genreItem.id;
      console.log(genreId)
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=5829397b7f5a69ec5c86c039befd05f7&with_genres=${genreId}`
      )
        .then((res) => res.json())
        .then((data) => {
          const randomMovies = data.results.slice(0, 4);
          console.log(randomMovies[0])
          setMoviesData(randomMovies);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"2vh"}}>
  <h1 style={{color:"#878787", fontFamily:"roboto", fontWeight:"500", fontSize:"1.2rem"}}>{category}</h1>
  <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
    {moviesData.map((item, index) => {
      return (
        <div key={index} style={{borderRadius:"5px"}}>
          <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}></img>
        </div>
      );
    })}
  </div>
  </div>
  );
}
MovieCard.propTypes = {
  category: PropTypes.any.isRequired,
};