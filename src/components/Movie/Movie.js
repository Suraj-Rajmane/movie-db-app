import React from 'react';
import './Movie.css';

const Movie = ({ movie }) => {

    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.Poster} alt="movieImage not found"/>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>Released : {movie.Year}</p>
                <p>Type : {movie.Type}</p>
                <p>More Info</p>
            </div>
        </div>
    );
};

export default Movie;