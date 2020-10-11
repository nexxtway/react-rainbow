import React from 'react';
import { connectHits } from 'react-instantsearch-dom';

const ItemList = ({ component: Component, items }) => {
    return items.map((item, index) => {
        const key = `item_${index}`;
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...item} key={key} />;
    });
};

// eslint-disable-next-line react/prop-types
const ResultItems = ({ component, hits }) => {
    return <ItemList component={component} items={hits} />;
};

export default connectHits(ResultItems);
