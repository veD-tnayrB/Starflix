import { Movie, Person, Serie } from 'components/media';
import './list.scss';

const MEDIAS = {
    movie: Movie,
    serie: Serie,
    person: Person
}

export default
function List({ items, children, type }) {
    const MediaToBeDisplayed = MEDIAS[type];
    const theresItems = items.length > 0;

    const elements = theresItems && MediaToBeDisplayed && items.map(item => (
        <MediaToBeDisplayed
            key={item.id}
            {...item}
        />
    ));

    return (

        <ul className="limited-list">
            {elements}
            {children}
        </ul>
    )
}