import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import SearchBar from './components/SearchBar/SearchBar';
import InitialData from './InitialData';


function App() {

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [movieData, setMovieData] = useState(InitialData);
  const [pageNumber, setPageNumber] = useState(1);
  

  const fetchMovieData = () => {

    let api = "";

    if(window.location.protocol === 'http:') {
			api = `http://www.omdbapi.com/?apikey=3877b0d8&s=${title}&page=${pageNumber}`;
		} else {
			api = `https://www.omdbapi.com/?apikey=3877b0d8&s=${title}&page=${pageNumber}`;
		}

    fetch(api)
    .then((response) => response.json())
    .then((result) => {

      if(result.Search) {
        // const newMovieData = [...movieData, result.Search]
        setMovieData( (prevData) => [...new Set([...prevData, ...result.Search])] );
        
      }

    })

  }

  const scrollEventCallback = () => {
    const {
      documentElement: { clientHeight, scrollTop, scrollHeight }
    } = document;

    if ((clientHeight + scrollTop >= scrollHeight - 50) && pageNumber <= 9) {
      setPageNumber(page => page + 1);
      fetchMovieData();
    }
  };

  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  const debouncedScrollEventCallback = debounce(scrollEventCallback, 500);

  window.addEventListener("scroll", debouncedScrollEventCallback);


  return (
    <div className="App">
      <SearchBar setTitle={setTitle} setYear={setYear} title={title} year={year} fetchMovieData={fetchMovieData} setMovieData={setMovieData} setPageNumber={setPageNumber}/>
      <MovieList movieData={movieData} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
