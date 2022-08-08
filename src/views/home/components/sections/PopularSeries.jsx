import { Serie } from "components/media";
import useFetch from "hooks/useFetch";
import routes from "routes/api";
import LimitedList from "../limited-list";

export default
function PopularSeries() {
    const [popularSeries, seriesError, isSeriesLoading, refetchSeries] = useFetch(routes.series.getPopular, { results: [] });
    const popularSeriesItems = popularSeries.results.map(serie => <Serie key={serie.id} serie={serie} />);

    return (
        <LimitedList
            listTitle="Popular Series"
            items={popularSeriesItems}
            urlToBeRedirected="/"
            isLoading={isSeriesLoading}
            error={seriesError}
            refetch={refetchSeries}
        />
    )
}