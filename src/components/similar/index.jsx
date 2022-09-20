import List from "components/list";
import Loading from "components/loading";
import { useState } from "react";
import { useEffect } from "react";

export default
function Similar({ service, id, type, title }) {
    const [similar, setSimilar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const theresSimilars = similar.length > 0;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        service(signal, id)
            .then(response => {
                setSimilar(response.results);
                setIsLoading(false);
            })

        return () => controller.abort();
    }, [id, service]);

    if (isLoading) return <Loading />;
    if (!theresSimilars) return null;

    return (
        <section>
            <h3>{title}</h3>
            <List
                items={similar}
                type={type}
                isLoading={isLoading}
            />
        </section>
    )
}