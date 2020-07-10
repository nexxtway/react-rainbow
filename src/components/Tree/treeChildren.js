import React from 'react';
import PropTypes from 'prop-types';
import Child from './child';
import getNodeName from './helpers/getNodeName';

export default function TreeChildren(props) {
    const {
        data,
        onNodeCheck,
        onNodeExpand,
        nodePath,
        parentName,
        selectedNode,
        onNodeSelect,
    } = props;
    return data.map((nodeProps, index) => {
        const nodeName = getNodeName({ parentName, index });
        const isSelected = selectedNode === nodeName;
        return (
            <Child
                {...nodeProps}
                key={nodeName}
                onNodeCheck={onNodeCheck}
                onNodeExpand={onNodeExpand}
                nodePath={[...nodePath, index]}
                isSelected={isSelected}
                name={nodeName}
                onNodeSelect={onNodeSelect}
                selectedNode={selectedNode}
            />
        );
    });
}

TreeChildren.propTypes = {
    /** A array with the nodes of the Tree. This is a recursive shape that is used for render the nested nodes passed on children of the array.
     */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            icon: PropTypes.node,
            isExpanded: PropTypes.bool,
            isLoading: PropTypes.bool,
            isChecked: PropTypes.oneOf([true, false, 'indeterminate']),
            children: PropTypes.array,
        }),
    ),
    /** The action triggered when the user clicks in the tree node checkbox. */
    onNodeCheck: PropTypes.func,
    /** The action triggered when the user clicks in the tree node expand or collapse button. */
    onNodeCollapse: PropTypes.func,
    /** A string with the generated parent node name based on root node level. */
    parentName: PropTypes.string,
    /** An array with the node path. */
    nodePath: PropTypes.array,
    /** The action triggered when the user clicks in the tree node label. */
    onNodeSelect: PropTypes.func,
    /** The tree node name. */
    selectedNode: PropTypes.string,
};

TreeChildren.defaultProps = {
    data: [],
    onNodeCheck: () => {},
    onNodeExpand: () => {},
    onNodeSelect: () => {},
    parentName: undefined,
    nodePath: undefined,
    selectedNode: undefined,
};
