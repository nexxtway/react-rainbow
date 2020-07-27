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
import InnerContainer from './styled/innerContainer';
import getNodeLevel from './helpers/getNodeLevel';
import getTabIndex from './helpers/getTabIndex';
import shouldSelectNode from './helpers/shouldSelectNode';

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
        isFirstNode,
    } = props;
    const hasChildren = Array.isArray(children);
    const hasCheckbox = typeof isChecked === 'boolean' || isChecked === 'indeterminate';
    const hasIcon = !!icon;
    const ariaLevelValue = getNodeLevel({ name });
    const ariaExpandedValue = hasChildren ? isExpanded : undefined;
    const ariaSelectedValue = isSelected === true ? isSelected : undefined;
    const tabIndex = getTabIndex({ selectedNode, isFirstNode, isSelected });

    const handleNodeSelect = event => {
        if (shouldSelectNode(event.target, name)) {
            onNodeSelect({ name, nodePath });
        }
    };

    const handleNodeExpand = () => {
        return onNodeExpand({ name, nodePath });
    };

    const handleNodeCheck = () => {
        onNodeCheck({ name, nodePath });
    };

    return (
        <ItemContainerLi
            id={name}
            data-id="node-element-li"
            icon={icon}
            hasChildren={hasChildren}
            onClick={handleNodeSelect}
            role="treeitem"
            aria-level={ariaLevelValue}
            aria-expanded={ariaExpandedValue}
            aria-selected={ariaSelectedValue}
            tabIndex={tabIndex}
        >
            <NodeContainer
                data-id="node-element"
                isSelected={isSelected}
                ariaLevelValue={ariaLevelValue}
                hasChildren={hasChildren}
            >
                <InnerContainer data-id="no-selectable-container">
                    <ExpandCollapseButton
                        hasChildren={hasChildren}
                        isExpanded={isExpanded === true}
                        isLoading={isLoading === true}
                        onClick={handleNodeExpand}
                    />
                    <RenderIf isTrue={hasCheckbox}>
                        <InputCheckbox checked={isChecked} onChange={handleNodeCheck} />
                    </RenderIf>
                </InnerContainer>
                <RenderIf isTrue={hasIcon}>
                    <IconContainer>{icon}</IconContainer>
                </RenderIf>
                <Label isSelected={isSelected} icon={icon}>
                    {label}
                </Label>
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
    onNodeCheck: PropTypes.func,
    onNodeExpand: PropTypes.func,
    nodePath: PropTypes.array,
    onNodeSelect: PropTypes.func,
    isSelected: PropTypes.bool,
    name: PropTypes.string,
    selectedNode: PropTypes.string,
    isFirstNode: PropTypes.bool,
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
    isFirstNode: undefined,
};
