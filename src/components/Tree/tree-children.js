import React from 'react';
import Child from './child';

const TreeChildren = ({ data }) => data.map(props => <Child {...props} />);

export default TreeChildren;
