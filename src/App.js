import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [color, setColor] = useState('red');
  const [filter, setFilter] = useState('');
 
  function handleMovieClick(i) {
    movies.splice(i, 1);
    setMovies(movies.slice());
  }

  function handleSubmit(e) {
    e.preventDefault();

    const movie = {
      title: title, 
      director: director,
      color: color,
    };
    
    const updatedMovies = [...movies, movie];

    setMovies(updatedMovies);
  }



  return (
    <div className="App">
      <div className='form-and-preview'>
        <div className="movie-form">
          <form onSubmit={handleSubmit}>
            <label> title
              <input value={title} onChange={e => setTitle(e.target.value)}/>
            </label>
            <label> director
              <input value={director} onChange={e => setDirector(e.target.value)}/>
            </label>
            <label> color
              <select value={color} onChange={e => setColor(e.target.value)}>
                <option value="red">rojo</option>
                <option value="green">verde</option>
                <option value="lightblue">azul</option>
                <option value="cyan">azul brillante</option>

              </select>
              
            </label>
            <button>Add to watchlist</button>
          </form>
        </div>
        <div className='movie-preview'>
          <div className='poster' style={{ background: color }}>
            <h2>{title}</h2>
            <p>By {director}</p>
          </div>
        </div>
      </div>
      <div className='filter-and-list'>
        <div className='movie-list'>
          {
            movies.map((movie, i) => <div onClick={() => handleMovieClick(i)} key={movie.title + i} 
              className='poster' style={{ background: movie.color }}>
              <h2>{movie.title}</h2>
              <p>By {movie.director}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );  
}

export default App;