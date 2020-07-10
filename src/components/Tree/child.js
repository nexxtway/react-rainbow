import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import TreeChildren from './treeChildren';
import ExpandCollapseButton from './expandCollapseButton';
import ItemContainerLi from './styled/itemContainerLi';
import NodeContainer from './styled/nodeContainer';
import Label from './styled/label';
import IconContainer from './styled/iconContainer';
import InputCheckbox from './styled/inputCheckbox';
import ChildrenContainerUl from './styled/childrenContainer';

export default function Child(props) {
    const {
        label,
        isExpanded,
        isLoading,
        children,
        isChecked,
        icon,
        nodePath,
        onNodeExpand,
        onNodeCheck,
        onNodeSelect,
        isSelected,
        name,
        selectedNode,
    } = props;
    const hasChildren = Array.isArray(children);
    const hasCheckbox = typeof isChecked === 'boolean' || isChecked === 'indeterminate';
    const hasIcon = !!icon;
    const levelMatch = name.match(/\./g);
    const ariaLevelValue = name && levelMatch ? levelMatch.length + 1 : 1;
    const tabIndex = isSelected ? 0 : -1;

    const handleNodeSelect = event => {
        event.stopPropagation();
        onNodeSelect({ name });
    };

    const handleExpandCollapse = () => {
        return onNodeExpand({ nodePath });
    };

    return (
        <ItemContainerLi
            id={name}
            data-id="node-element-li"
            icon={icon}
            hasChildren={hasChildren}
            onClick={handleNodeSelect}
            role="treeitem"
            aria-label={hasChildren ? label : undefined}
            aria-level={ariaLevelValue}
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-selected={isSelected === true ? isSelected : undefined}
            tabIndex={tabIndex}
        >
            <NodeContainer data-id="node-element" isSelected={isSelected}>
                <ExpandCollapseButton
                    hasChildren={hasChildren}
                    isExpanded={isExpanded === true}
                    isLoading={isLoading === true}
                    onClick={handleExpandCollapse}
                />
                <RenderIf isTrue={hasCheckbox}>
                    <InputCheckbox
                        type="checkbox"
                        label=""
                        checked={isChecked}
                        onChange={() => onNodeCheck({ nodePath })}
                    />
                </RenderIf>
                <RenderIf isTrue={hasIcon}>
                    <IconContainer>{icon}</IconContainer>
                </RenderIf>
                <Label icon={icon}>{label}</Label>
            </NodeContainer>
            <RenderIf isTrue={hasChildren && isExpanded}>
                <ChildrenContainerUl icon={icon} isChecked={isChecked} role="group">
                    <TreeChildren
                        data={children}
                        onNodeCheck={onNodeCheck}
                        onNodeExpand={onNodeExpand}
                        nodePath={nodePath}
                        parentName={name}
                        onNodeSelect={onNodeSelect}
                        selectedNode={selectedNode}
                    />
                </ChildrenContainerUl>
            </RenderIf>
        </ItemContainerLi>
    );
}

Child.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isChecked: PropTypes.oneOf([true, false, 'indeterminate']),
    isExpanded: PropTypes.bool,
    isLoading: PropTypes.bool,
    icon: PropTypes.node,
    children: PropTypes.array,
    /** The action triggered when the user clicks in the tree node checkbox. */
    onNodeCheck: PropTypes.func,
    /** The action triggered when the user clicks in the tree node expand or collapse button. */
    onNodeExpand: PropTypes.func,
    /** An array with the node path. */
    nodePath: PropTypes.array,
    /** The action triggered when the user clicks in the tree node label. */
    onNodeSelect: PropTypes.func,
    /** Boolean value that indicates if a node is or not selected */
    isSelected: PropTypes.bool,
    /** Child node name generated based on parent node level and child node level */
    name: PropTypes.string,
    /** The tree node name. */
    selectedNode: PropTypes.string,
};

Child.defaultProps = {
    label: undefined,
    isChecked: undefined,
    isExpanded: undefined,
    isLoading: undefined,
    children: undefined,
    icon: null,
    onNodeExpand: () => {},
    onNodeCheck: () => {},
    nodePath: [],
    onNodeSelect: undefined,
    isSelected: undefined,
    name: undefined,
    selectedNode: undefined,
};
