import List from "components/list";
import { useState } from "react";
import { useEffect } from "react";
import Credit from "./Credit";

export default
function Credits({ type, id, service }) {
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

    const creditElements = credits.map(credit => (
        <Credit 
            key={credit.id}
            credit={credit}
        />
    ));

    return (
        <>
            <List 
                items={creditElements}
                type={type}
            />
        </>
    )
}