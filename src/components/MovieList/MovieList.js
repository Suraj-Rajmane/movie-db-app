import React, { useCallback, useRef } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

const MovieList = ({ movieData }) => {

    return (
        <div className="movie-list">
            {movieData.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}
        </div>
    );
};

export default MovieList;