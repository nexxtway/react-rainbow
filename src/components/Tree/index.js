import React from 'react';
import PropTypes from 'prop-types';
import TreeChildren from './tree-children';
import TreeContainerUl from './styled/treeContainerUl';
import getChild from './helpers/get-child';

/**
 * A Tree is visualization of a structure hierarchy with nested elements. A branch can be expanded or collapsed or selected. This is a BETA version.
 * @category Layout
 */
const Tree = props => {
    const { data, onExpandCollapse, onSelect, className, style } = props;

    return (
        <TreeContainerUl className={className} style={style}>
            <TreeChildren
                data={data}
                onExpandCollapse={onExpandCollapse}
                onSelect={onSelect}
                childPath={[]}
            />
        </TreeContainerUl>
    );
};

Tree.propTypes = {
    /** A array with the nodes of the ButtonGroupPicker. This is a recursive shape that is used for render the nested nodes passed on children of the array. */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            icon: PropTypes.node,
            isExpanded: PropTypes.bool,
            isChecked: PropTypes.bool,
            children: PropTypes.array,
        }),
    ),
    /** The action triggered when the user clicking in the tree node expand or collapse button. */
    onExpandCollapse: PropTypes.func,
    /** The action triggered when the user clicking in the tree node checkbox. */
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

Tree.getChild = getChild;

export default Tree;
