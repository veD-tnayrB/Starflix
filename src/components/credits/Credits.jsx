import { useState, useEffect } from "react";
import List from "components/list";

export default
function Credits({ id, service, type, title }) {
    const [credits, setCredits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        service(signal, id)
        .then(response => {
            setCredits(response.cast);
            setIsLoading(false);
        })

        return () => controller.abort();
    }, []);

    return (
        <section>
            <h3>{title}</h3>
            <List 
                items={credits}
                type={type}
            />
        </section>
    )
}