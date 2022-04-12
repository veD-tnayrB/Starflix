import React from 'react';
import Card from 'pages/main/components/card';

import './list.scss';

const List = ({ listName, items }) => {

    return (
        <div className="list-container">
            <h3>{listName}</h3>
            <ol>
                {
                    items.map(item => (
                        <Card
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default List;