import AgeIndicator from 'components/age-indicator';
import { memo, useEffect, useState } from 'react';
import { ORIGINAL_IMAGE_BASE_URL } from 'services/config';
import { getPopular } from 'services/movies';

import { Link } from 'react-router-dom';
import './hero.scss';

const DEFAULT_VALUE = {
	backdrop_path: '',
	release_date: '',
	adult: false,
};

function Hero() {
	const [popularMovie, setPopularMovie] = useState(DEFAULT_VALUE);
	const backdropURL = `${ORIGINAL_IMAGE_BASE_URL}${popularMovie?.backdrop_path}`;
	const releaseYear = popularMovie?.release_date.split('-')[0];

	useEffect(() => {
		getPopular(null, 1).then(response => {
			const firstMovie = response.results[0];
			setPopularMovie(firstMovie);
		});
	}, []);

	return (
		<>
			<div className="movie-info-container">
				<Link
					className="movie-link"
					to={`/movies/movie/${popularMovie.id}`}>
					<h2 className="title">{popularMovie?.title}</h2>
				</Link>
				<div className="details-section">
					<span>{releaseYear}</span>
					<span>{popularMovie?.original_language}</span>
					{popularMovie?.overview && (
						<AgeIndicator adult={popularMovie?.adult} />
					)}
				</div>
				<p className="overview">{popularMovie?.overview}</p>
			</div>

			<img
				className="backdrop"
				alt={popularMovie?.title}
				src={backdropURL}
				loading="lazy"
			/>
		</>
	);
}

export default memo(Hero);
