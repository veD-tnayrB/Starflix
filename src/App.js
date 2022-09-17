import { Routes, Route } from "react-router-dom";
import { Home, Movies, Series, People } from 'views';
import DetailedMovie from "views/detailed-media/movie";
import DetailedSerie from "views/detailed-media/serie";
import DetailedPerson from "views/detailed-media/person";
import routes from "routes/client";

import 'global/styles.scss';

function App() {
    const { home, movies, series, people } = routes;

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/movie/:movieId" element={<DetailedMovie />} />

            <Route path="/series" element={<Series />} />
            <Route path="/series/serie/:serieId" element={<DetailedSerie />} />

            <Route path="/people" element={<People />} />
            <Route path="/people/person/:personId" element={<DetailedPerson />} />
        </Routes>
    )
}

export default App;