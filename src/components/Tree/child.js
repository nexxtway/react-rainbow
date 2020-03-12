import React from 'react';
import propTypes from 'prop-types';
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
    const { label, isExpanded, children, isChecked, icon, onExpandCollapse, onSelect } = props;
    const hasChildren = Array.isArray(children);
    return (
        <ItemContainerLi>
            <NodeContainer>
                <CollapseExpandButton
                    hasChildren={hasChildren}
                    isExpanded={isExpanded === true}
                    onExpandCollapse={onExpandCollapse}
                />
                <RenderIf isTrue={typeof isChecked === 'boolean'}>
                    <Input type="checkbox" checked={isChecked === true} onSelect={onSelect} />
                </RenderIf>
                <RenderIf isTrue={icon}>
                    <IconContainer> {icon} </IconContainer>
                </RenderIf>
                <Label>{label}</Label>
            </NodeContainer>
            <RenderIf isTrue={hasChildren && isExpanded}>
                <ChildrenContainer icon={icon} isChecked={isChecked}>
                    <TreeChildren data={children} />
                </ChildrenContainer>
            </RenderIf>
        </ItemContainerLi>
    );
};

Child.propTypes = {
    label: propTypes.string,
    isChecked: propTypes.bool,
    isExpanded: propTypes.bool,
    icon: propTypes.node,
    children: propTypes.array,
    onExpandCollapse: propTypes.func,
    onSelect: propTypes.func,
};

Child.defaultProps = {
    label: '',
    isChecked: undefined,
    isExpanded: undefined,
    children: undefined,
    icon: null,
    onExpandCollapse: () => {},
    onSelect: () => {},
};

export default Child;
