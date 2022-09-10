import { getAiring, getOnTheAir, getPopular, getTopRated } from "services/series";
import Section from "components/section";

export default
function DefaultContent() {
    
    return (
        <>
            <Section
                type="serie"
                sectionId="popular-series"
                sectionTitle="Most Popular Series"
                service={getPopular}
            />

            <Section
                type="serie"
                sectionId="on-the-air"
                sectionTitle="On The Air"
                service={getOnTheAir}
            />

            <Section
                type="serie"
                sectionId="top-rated"
                sectionTitle="Top Rated Series"
                service={getTopRated}
            />

            <Section
                type="serie"
                sectionId="airing"
                sectionTitle="Airing"
                service={getAiring}
            />
        </>
    )
}