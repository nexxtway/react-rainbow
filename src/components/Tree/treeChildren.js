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
        const isFirstNode = !parentName && index === 0;
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
                isFirstNode={isFirstNode}
            />
        );
    });
}

TreeChildren.propTypes = {
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
    onNodeCheck: PropTypes.func,
    onNodeCollapse: PropTypes.func,
    parentName: PropTypes.string,
    nodePath: PropTypes.array,
    onNodeSelect: PropTypes.func,
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
