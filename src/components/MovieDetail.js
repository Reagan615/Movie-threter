import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillYoutube } from 'react-icons/ai';

function MovieDetail() {
    const { title } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch('/movies.json')
             .then(response => response.json())
             .then(data => {
               const movie = data.results.find(movie => movie.title === title);
               setMovie(movie);
               document.title = movie.title;
             })
             .catch(error => console.log(error));
    }, [title]);

    
  return (
    <div className="movie-details">
    {movie ? (
        <div className="movie-board">
            <div className="movie-img">
                <img src={movie.img} alt={movie.title}></img>
            </div>
            <div className="movie-detail">
                <span className="movie-title">{movie.title}</span>
                <span className="movie-year">Year: {movie.year}</span>
                <span>Running time: {movie.runningTime}</span>
                <span className="movie-genre">Genre: {movie.genre.join(" · ")}</span>
                <Link to={'/not-found'}><button><AiFillYoutube className="icon"/>Play movie</button></Link>
            </div>

        </div>
      
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default MovieDetail