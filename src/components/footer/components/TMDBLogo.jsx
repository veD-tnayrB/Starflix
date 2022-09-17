import React from 'react';
import TheMovieDataBaseLogo from './assets/TheMovieDataBaseLogo.svg';

export default 
function TMDBLogo() {

    return (
        <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">
            <img 
            title="The Movie Data Base" 
            alt="the movie data base" 
            src={TheMovieDataBaseLogo} 
            />
        </a>
    )
}