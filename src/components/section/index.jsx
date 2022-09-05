import { useState, useEffect } from "react";
import { Movie, Person, Serie } from "components/media";
import ShowMoreButton from "./ShowMoreButton";
import Title from "./Title";

import './section.scss';


export default
function Section({ service, sectionTitle, sectionId, isLimitedSection = false, media }) {
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
    }, [page])

    const elementsResults = results.map(element => {
        if (media === 'movie') {
            return <Movie
                        key={element.id}
                        movie={element}
                    />
        }

        if (media === 'serie') {
            return <Serie
                        key={element.id}
                        serie={element}
                    />
        }

        if (media === 'person') {
            return <Person
                        key={element.id}
                        person={element}
                    />
        }

        
    });

    return (
        <section>
            <div
                className="limited-list-container"
                id={sectionId}
            >
                <Title title={sectionTitle} />

                <div>
                    <ul className="limited-list">
                        {elementsResults}

                        {
                            !isLimitedSection && 
                            <ShowMoreButton
                                setPage={setPage}
                                isLoading={isLoading}
                            />
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}