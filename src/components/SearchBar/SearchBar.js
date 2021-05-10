import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setTitle, setYear, title, year, fetchMovieData, setMovieData, setPageNumber }) => {

    const handleSearch = () => {
        setMovieData([]);
        setPageNumber(1);
        fetchMovieData();
    }


    return (
        <div className="search-bar">
            <input type="search" className="flex-item" placeholder="Movie Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="search" className="flex-item" placeholder="Movie Year" onChange={(e) => setYear(e.target.value)} value={year}/>
            <button className="flex-item" id="search-button" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;