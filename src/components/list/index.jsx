import uniqid from 'uniqid';
import { memo } from 'react';
import { Movie, Person, Serie } from 'components/media';
import Preload from './preaload';
import './list.scss';

const MEDIAS = {
    movie: Movie,
    serie: Serie,
    person: Person
}

function List({ items, children, type, isLoading = false }) {
    const MediaToBeDisplayed = MEDIAS[type];
    const theresItems = items.length > 0;

    const elements = theresItems && MediaToBeDisplayed && items.map(item => (
        <MediaToBeDisplayed
            key={uniqid()}
            {...item}
        />
    ));

    const content = isLoading ? <Preload /> : <>{elements} {children}</>;

    return (
        <ul className="limited-list">
            {content}
        </ul>
    )
}

export default memo(List);