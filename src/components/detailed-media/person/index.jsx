import { useParams } from "react-router-dom";

export default
function DetailedPerson() {
    const { personId } = useParams();
    console.log('person', personId);

    return (
        <main>
            
        </main>
    )
}