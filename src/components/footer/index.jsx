import ApiCredits from "./components/ApiCedits";
import Card from "./components/Card";
import StarflixCredits from "./components/StarflixCredits";
import CreatorCredits from "./components/CreatorCredits";
import pages from './pages';

import './footer.scss';

export default
    function Footer() {

    return (
        <footer>
            <div className="first-row">
                <article className="credits-zone">
                    <StarflixCredits />
                    <ApiCredits />
                </article>

                <div className="pages-section">
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
                </div>
            </div>

            <CreatorCredits />
        </footer>
    )
}