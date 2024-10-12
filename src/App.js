import logo from './logo.svg';
import './App.css';
import { useMovies } from './hooks/useMovies';
import { useMovieSearch } from './hooks/useMovieSearch'
import { useSearchDebounce } from './hooks/useSearchDebounce'; 
import { useEffect, useRef } from 'react';
import { MoviesList } from './components/MoviesList';

function App() {
  const { getMovies, movies, setSort, sort } = useMovies()
  const { search, setSearch, searchError } = useMovieSearch()

  const handleChangeSearch = e => {
    const inputValue = e.target.value

    setSearch(inputValue) // Do validation.
    getMovies(inputValue)
  }

  const debouncedHandleChangeSearch = useSearchDebounce(handleChangeSearch, 500)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies app</h1>
        <div className="header-inputs">
          <div>
            <input type="text" onChange={debouncedHandleChangeSearch} />
            { searchError !== null && <p className="error-message">{searchError}</p> }
          </div>
          <div>
            <label htmlFor="sort-checkbox">Sort alphabetically</label>
            <input id="sort-checkbox" type="checkbox" onChange={() => setSort(prevState => !prevState)} checked={sort} />
          </div>
        </div>
      </header>
      <main>
        <MoviesList movies={movies} />
      </main>
    </div>
  );
}

export default App;
