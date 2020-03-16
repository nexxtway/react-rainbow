import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import RenderIf from '../RenderIf';
import TreeChildren from './tree-children';
import CollapseExpandButton from './expand-collapse-button';
import ItemContainerLi from './styled/itemContainerLi';
import NodeContainer from './styled/nodeContainer';
import Label from './styled/label';
import IconContainer from './styled/iconContainer';
import ChildrenContainer from './styled/childrenContainer';

const Child = props => {
    const {
        label,
        isExpanded,
        children,
        isChecked,
        icon,
        childPath,
        onExpandCollapse,
        onSelect,
    } = props;
    const hasChildren = Array.isArray(children);
    const hasCheckbox = typeof isChecked === 'boolean';
    const hasIcon = !!icon;
    return (
        <ItemContainerLi hasChildren={hasChildren}>
            <NodeContainer>
                <CollapseExpandButton
                    hasChildren={hasChildren}
                    isExpanded={isExpanded === true}
                    onClick={() => onExpandCollapse({ childPath })}
                />
                <RenderIf isTrue={hasCheckbox}>
                    <Input
                        type="checkbox"
                        checked={isChecked === true}
                        onChange={() => onSelect({ childPath })}
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
                        childPath={childPath}
                    />
                </ChildrenContainer>
            </RenderIf>
        </ItemContainerLi>
    );
};

Child.propTypes = {
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    isExpanded: PropTypes.bool,
    icon: PropTypes.node,
    children: PropTypes.array,
    onExpandCollapse: PropTypes.func,
    onSelect: PropTypes.func,
    childPath: PropTypes.array,
};

Child.defaultProps = {
    label: '',
    isChecked: undefined,
    isExpanded: undefined,
    children: undefined,
    icon: null,
    onExpandCollapse: () => {},
    onSelect: () => {},
    childPath: [],
};

export default Child;
