import Section from "components/section";
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from "services/movies";

export default
function DefaultContent() {

    return (
        <>
            <Section
                type="movie"
                sectionId="popular-movies"
                sectionTitle="Most Popular Movies"
                service={getPopular}
            />

            <Section
                type="movie"
                sectionId="top-rated"
                sectionTitle="Top Rated Movies"
                service={getTopRated}
            />

            <Section
                type="movie"
                sectionId="upcoming"
                sectionTitle="Upcoming Movies"
                service={getUpcoming}
            />

            <Section
                type="movie"
                sectionId="now-playing"
                sectionTitle="Now Playing Movies"
                service={getNowPlaying}
            />
        </>
    )
}