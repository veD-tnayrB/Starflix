import { InView } from 'react-intersection-observer';
import TitleWithLink from './TitleWithLink';
import Loading from 'components/loading';

import './list.scss';
import { useState } from 'react';

function List({ items, listTitle, urlToBeRedirected, isLoading, error, refetch }) {
    const [isInView, setIsInView] = useState(true);
    const theresTitle = listTitle;
    const redirect = urlToBeRedirected;

    function handleView(isElementInView, entry) {
        setIsInView(isElementInView);
    }

    return (
        <InView onChange={handleView}>
            {isLoading || !isInView && <Loading />}
            <div className="limited-list-container">
                {
                    theresTitle &&
                    <div className="title-container">
                        {
                        redirect 
                            ?
                            
                            <TitleWithLink 
                            urlToBeRedirected={urlToBeRedirected}
                            listTitle={listTitle}
                            />

                            : 
                            <h3>{listTitle}</h3>
                        }
                    </div>
                }
            
            {
                isInView &&
                <ul className="limited-list">
                    {items}
                </ul>
            }
        </div>
        </InView>
    )
}

export default List;