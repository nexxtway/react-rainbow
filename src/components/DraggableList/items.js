import React from 'react';
import Item from './item';

const Items = props => {
    const { data, field, component, keyField } = props;
    return data.map(item => (
        <Item key={item[keyField]} row={item} field={field} component={component} />
    ));
};

export default Items;
