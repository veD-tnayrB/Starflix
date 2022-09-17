import { useState, useEffect } from "react";
import ShowMoreButton from "./ShowMoreButton";
import Title from "./Title";
import List from "components/list";

import './section.scss';



export default
function Section({ service, sectionTitle, sectionId, isLimitedSection = false, type }) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        service(signal, page)
            .then(response => {
                if (isLimitedSection) {
                    setResults(response.results);
                    setIsLoading(false);
                    return;
                }

                setResults(previousResults => [...previousResults, ...response.results]);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, [page, service, isLimitedSection])

    return (
        <section>
            <div
                className="limited-list-container"
                id={sectionId}
            >
                <Title title={sectionTitle} />

                <List
                    items={results}
                    type={type}
                >
                    {
                        !isLimitedSection &&
                        !isLoading &&
                        <ShowMoreButton
                            setPage={setPage}
                            isLoading={isLoading}
                        />
                    }
                </List>
                </div>
        </section>
    )
}