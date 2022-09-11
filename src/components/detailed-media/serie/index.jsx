import { useParams } from "react-router-dom"

export default
function DetailedSerie() {
    const { serieId } = useParams();
    console.log('serie', serieId);

    return (
        <main>
            
        </main>
    )
}