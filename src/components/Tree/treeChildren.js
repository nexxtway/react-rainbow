import React from 'react';
import Child from './child';

export default function TreeChildren({ data, onSelect, onExpandCollapse, nodePath }) {
    return data.map((props, index) => (
        <Child
            {...props}
            onSelect={onSelect}
            onExpandCollapse={onExpandCollapse}
            nodePath={[...nodePath, index]}
        />
    ));
}
