import React from 'react';
import Child from './child';

export default function TreeChildren({ data, onSelect, onExpandCollapse, nodePath }) {
    return data.map((props, index) => {
        const key = `child-item-${index}`;
        return (
            <Child
                {...props}
                key={key}
                onSelect={onSelect}
                onExpandCollapse={onExpandCollapse}
                nodePath={[...nodePath, index]}
            />
        );
    });
}
