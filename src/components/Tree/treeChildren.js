import React from 'react';
import Child from './child';

export default function TreeChildren({ data, onSelect, onExpandCollapse, childPath }) {
    return data.map((props, index) => (
        <Child
            {...props}
            onSelect={onSelect}
            onExpandCollapse={onExpandCollapse}
            childPath={[...childPath, index]}
        />
    ));
}
