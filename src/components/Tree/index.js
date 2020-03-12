import React from 'react';
import PropTypes from 'prop-types';
import TreeChildren from './tree-children';
import TreeContainerUl from './styled/treeContainerUl';

/**
 * A Tree is visualization of a structure hierarchy with nested elements. A branch can be expanded or collapsed or selected.
 * @category Layout
 */

const Tree = props => {
    const { data, onExpandCollapse, onSelect, className, style } = props;

    return (
        <TreeContainerUl className={className} style={style}>
            <TreeChildren data={data} onExpandCollapse={onExpandCollapse} onSelect={onSelect} />
        </TreeContainerUl>
    );
};

Tree.propTypes = {
    data: PropTypes.array,
    onExpandCollapse: PropTypes.func,
    onSelect: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Tree.defaultProps = {
    data: [],
    onExpandCollapse: () => {},
    onSelect: () => {},
    className: undefined,
    style: undefined,
};

export default Tree;
