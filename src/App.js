import { Routes, Route } from "react-router-dom";
import { Home, Movies, Series, People } from 'views';
import routes from "routes/client";

import 'global/styles.scss';
import DetailedMovie from "components/detailed-media/movie";
import DetailedSerie from "components/detailed-media/serie";
import DetailedPerson from "components/detailed-media/person";

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