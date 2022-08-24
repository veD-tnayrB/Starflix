import { useState } from "react";
import List from "components/list";
import { Serie } from "components/media";
import ShowMore from "components/show-more";
import useFetch from "hooks/useFetch";


export default
function Section({ url, sectionTitle, sectionId }) {
    const [page, setPage] = useState(1);
    const [series, setSeries, error, isLoading, refetch] = useFetch(`${url}&page=${page}`, { results: [] }, loadMore);

    function loadMore(newSeries) {
        setSeries(currentSeries => (
            {...currentSeries, results: [...currentSeries?.results, ...newSeries.results]}
        ))
    }

    const seriesElements = series.results.map(serie => (
        <Serie
         key={serie.id}
         serie={serie}
        />
    ));
        
    return (
        <section>
            <List
             items={seriesElements}
             listId={sectionId}
             listTitle={sectionTitle}
             isLoading={isLoading}
             error={error}
             refetch={refetch}
            >
                <ShowMore setPage={setPage} isLoading={isLoading} />
            </List>
        </section>
    )
}