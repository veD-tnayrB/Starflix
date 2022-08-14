import * as React from 'react';
import TitleWithLink from './TitleWithLink';
import './list.scss';

function List({ items, listTitle, urlToBeRedirected, isLoading, error, refetch }) {
    const theresTitle = listTitle;
    const redirect = urlToBeRedirected

    return (
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
            
            
            <ul className="limited-list">
                {items}
            </ul>
        </div>
    )
}

export default List;