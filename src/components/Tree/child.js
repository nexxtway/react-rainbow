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
import ChildrenContainer from './styled/childrenContainer';

export default function Child(props) {
    const {
        label,
        isExpanded,
        isLoading,
        children,
        isChecked,
        icon,
        nodePath,
        onExpandCollapse,
        onSelect,
    } = props;
    const hasChildren = Array.isArray(children);
    const hasCheckbox = typeof isChecked === 'boolean' || isChecked === 'indeterminate';
    const hasIcon = !!icon;
    return (
        <ItemContainerLi hasChildren={hasChildren} icon={icon} data-id="node-element-li">
            <NodeContainer data-id="node-element">
                <ExpandCollapseButton
                    hasChildren={hasChildren}
                    isExpanded={isExpanded === true}
                    isLoading={isLoading === true}
                    onClick={() => onExpandCollapse({ nodePath })}
                />
                <RenderIf isTrue={hasCheckbox}>
                    <InputCheckbox
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onSelect({ nodePath })}
                    />
                </RenderIf>
                <RenderIf isTrue={hasIcon}>
                    <IconContainer>{icon}</IconContainer>
                </RenderIf>
                <Label icon={icon}>{label}</Label>
            </NodeContainer>
            <RenderIf isTrue={hasChildren && isExpanded}>
                <ChildrenContainer icon={icon} isChecked={isChecked}>
                    <TreeChildren
                        data={children}
                        onSelect={onSelect}
                        onExpandCollapse={onExpandCollapse}
                        nodePath={nodePath}
                    />
                </ChildrenContainer>
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
    onExpandCollapse: PropTypes.func,
    onSelect: PropTypes.func,
    nodePath: PropTypes.array,
};

Child.defaultProps = {
    label: undefined,
    isChecked: undefined,
    isExpanded: undefined,
    isLoading: undefined,
    children: undefined,
    icon: null,
    onExpandCollapse: () => {},
    onSelect: () => {},
    nodePath: [],
};
