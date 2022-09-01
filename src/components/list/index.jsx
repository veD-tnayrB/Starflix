import TitleWithLink from './TitleWithLink';
import Loading from 'components/loading';
import Error from 'components/error';

import './list.scss';

function List({ items, listTitle, urlToBeRedirected, isLoading, error, refetch, children, listId }) {
    const theresTitle = listTitle;
    const redirect = urlToBeRedirected;

    if (error) return <Error refetch={refetch} />;
    if (isLoading) return <Loading />;
    console.log(error)

    return (
        <div className="limited-list-container" id={listId}>
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


            <div>
                <ul className="limited-list">
                    {items}
                    {children}
                </ul>
            </div>

        </div>
    )
}

export default List;