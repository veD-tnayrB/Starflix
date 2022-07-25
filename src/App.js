import { Routes, Route } from "react-router-dom";
import { Home, Movies, Series, People } from 'views';
import routes from "routes/client";

import 'global/styles.scss';

function App() {
    const { home, movies, series, people } = routes;

    return (
        <Routes>
            <Route path={home.route} element={<Home />} />
            <Route path={movies.route} element={<Movies />} />
            <Route path={series.route} element={<Series />} />
            <Route path={people.route} element={<People />} />
        </Routes>
    )
}

export default App;