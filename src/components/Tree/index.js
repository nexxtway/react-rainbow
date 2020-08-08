import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import TreeChildren from './treeChildren';
import TreeContainerUl from './styled/treeContainerUl';
import getNode from './helpers/getNode';
import useKeyNavigation from './hooks/useKeyNavigation';
import useTreeNodesAsPlainList from './hooks/useTreeNodesAsPlainList';

/**
 * A Tree is visualization of a structure hierarchy with nested elements. A branch can be expanded or collapsed or selected. This is a BETA version.
 * @category Layout
 */
export default function Tree(props) {
    const {
        data,
        onNodeExpand,
        onNodeCheck,
        onNodeSelect,
        selectedNode,
        className,
        style,
        id,
        ariaLabel,
        ariaLabelledBy,
    } = props;

    const visibleNodes = useTreeNodesAsPlainList(data);

    const {
        autoFocus,
        focusedNode,
        setFocusedNode,
        clearFocusedNode,
        keyDownHandler,
    } = useKeyNavigation({
        visibleNodes,
        selectedNode,
        onNodeSelect,
        onNodeExpand,
    });

    return (
        <Provider
            value={{
                autoFocus,
                focusedNode,
                setFocusedNode,
                clearFocusedNode,
                privateKeyDown: keyDownHandler,
            }}
        >
            <TreeContainerUl
                className={className}
                style={style}
                id={id}
                role="tree"
                aria-labelledby={ariaLabelledBy}
                aria-label={ariaLabel}
            >
                <TreeChildren
                    data={data}
                    onNodeExpand={onNodeExpand}
                    onNodeCheck={onNodeCheck}
                    nodePath={[]}
                    selectedNode={selectedNode}
                    onNodeSelect={onNodeSelect}
                />
            </TreeContainerUl>
        </Provider>
    );
}

Tree.propTypes = {
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
    /** The action triggered when the user clicks in the tree node expand or collapse button. */
    onNodeExpand: PropTypes.func,
    /** The action triggered when the user clicks in the tree node checkbox. */
    onNodeCheck: PropTypes.func,
    /** The action triggered when the user clicks in the tree node label. */
    onNodeSelect: PropTypes.func,
    /** The tree node name. */
    selectedNode: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The id of the tree heading element. Set to the parent element of the tree who contains the tree nodes.
     * No need to use "ariaLabel" atribute if this one apply */
    ariaLabelledBy: PropTypes.string,
    /** The label for the parent element of the tree who contains the tree nodes. Apply if no tree heading element present */
    ariaLabel: PropTypes.string,
};

Tree.defaultProps = {
    data: [],
    onNodeExpand: () => {},
    onNodeCheck: () => {},
    onNodeSelect: () => {},
    selectedNode: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    ariaLabelledBy: undefined,
    ariaLabel: undefined,
};

/**
 * Add documentation.
 * @public
 */
Tree.getNode = getNode;
