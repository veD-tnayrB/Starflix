import { useState, useEffect } from "react";
import List from "components/list";
import Loading from "components/loading";

export default
function Credits({ id, service, type, title }) {
    const [credits, setCredits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const theresCredits = credits.length > 0;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        service(signal, id)
        .then(response => {
            setCredits(response.cast);
            setIsLoading(false);
        });

        return () => controller.abort();
    }, [id, service]);

    if (isLoading) return <Loading />;
    if (!theresCredits) return null;

    return (
        <section>
            <h3>{title}</h3>
            <List 
                items={credits}
                type={type}
                isLoading={isLoading}
            />
        </section>
    )
}