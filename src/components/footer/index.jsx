import ApiCredits from "./components/ApiCedits";
import Card from "./components/Card";
import StarflixCredits from "./components/StarflixCredits";
import pages from './pages';

import './footer.scss';

export default
function Footer() {

    return (
        <footer>
            <article className="credits-zone">
                <StarflixCredits />
                <ApiCredits />
            </article>

            <Card 
             info={pages.home}
            />
            <Card 
             info={pages.movies}
            />
            <Card 
             info={pages.series}
            />
            <Card 
             info={pages.people}
            />
        </footer>
    )
}