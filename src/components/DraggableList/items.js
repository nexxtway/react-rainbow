/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Item from './item';

const Items = props => {
    const { data, field, component, keyField, ...rest } = props;
    return data.map((item, index) => (
        <Item
            {...rest}
            key={item[keyField]}
            id={item[keyField]}
            index={index}
            row={item}
            field={field}
            component={component}
        />
    ));
};

export default Items;
