import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [sortType, setSortType] = useState(null);

    useEffect(() => {
        fetch('/movies.json')
             .then(response => response.json())
             .then(data => setMovies(data.results))
             .catch(error => console.log(error));
    }, []);

    const handleSort = () => {
        if(sortType === null) {
            setSortType('year');
        } else if (sortType === 'year') {
            setSortType('alphabet');
        } else {
            setSortType(null);
        }
    };

    let sortedMovies = [...movies];

    if(sortType === 'year') {
        sortedMovies = sortedMovies.sort((a, b) => a.year - b.year);
    } else if(sortType === 'alphabet') {
        sortedMovies = sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    };

  return (
    <div className='catalog-container'>
        <div className='button'>
            <button className='sort' onClick={handleSort}>
                {sortType === null ? 'Sort movies' : sortType === 'year' ? 'Sort by year' : 'Sort by Alphabet'}
            </button>
            <Link to='/add-movie' className='add'>Add Movie</Link>
        </div>
        <div className='showmovies'>
            {sortedMovies.map(movie => (
                <Link to={`/movies/${movie.title}`} key={movie.title} className='movie'>
                     
                         <div className='photo'>
                             <img src={movie.img} alt={movie.title}></img>
                         </div>
                         <div className='tag'>
                             <span className='moviename'>{movie.title}</span>
                             <span className='movietime'>{movie.year}</span>
                         </div>
                     
                </Link>  
            ))}
        </div>
    </div>
  )
}

export default Catalog