import React from 'react';
import Child from './child';

const TreeChildren = ({ data, onSelect, onExpandCollapse, childPath }) => {
    return data.map((props, index) => (
        <Child
            {...props}
            onSelect={onSelect}
            onExpandCollapse={onExpandCollapse}
            childPath={[...childPath, index]}
        />
    ));
};

export default TreeChildren;
