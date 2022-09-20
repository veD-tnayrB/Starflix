
const MINIMUM_ELEMENTS = 20;
const arrayOf20Elements = Array.from(Array(MINIMUM_ELEMENTS).keys());

export default
function Preload() {

    const preloadElements = arrayOf20Elements.map(element => (
        <div 
            key={element}
            className="preload-element">
        </div>
    ))

    return (
        <>
            {preloadElements}
        </>
    )
}