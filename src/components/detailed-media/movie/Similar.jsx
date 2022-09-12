import List from "components/list";
import { useState } from "react";
import { useEffect } from "react";

export default
function Similar({ service, id, type, title }) {
    const [similar, setSimilar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    }, []);

    return (
        <section>
            <h3>{title}</h3>
            <List
                items={similar}
                type={type}
            />
        </section>
    )
}