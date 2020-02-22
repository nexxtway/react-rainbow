import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import RenderIf from '../RenderIf';
import TreeChildren from './tree-children';
import CollapseExpandButton from './expand-collapse-button';

const TreeItemContainer = styled.li``;

const NodeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Label = styled.span`
    font-size: 16px;
`;

const ChildrenContainer = styled.div`
    padding-left: 12px;
`;

const Child = props => {
    const { label, isExpanded, children, isChecked, icon, onExpandCollapse, onSelect } = props;
    const hasChildren = Array.isArray(children);
    return (
        <TreeItemContainer>
            <NodeContainer>
                <CollapseExpandButton
                    hasChildren={hasChildren}
                    isExpanded={isExpanded === true}
                    onExpandCollapse={onExpandCollapse}
                />
                <RenderIf isTrue={typeof isChecked === 'boolean'}>
                    <Input type="checkbox" checked={isChecked === true} onSelect={onSelect} />
                </RenderIf>
                <span> Icon Here </span>
                <Label>{label}</Label>
            </NodeContainer>
            <RenderIf isTrue={hasChildren && isExpanded}>
                <ChildrenContainer>
                    <TreeChildren data={children} />
                </ChildrenContainer>
            </RenderIf>
        </TreeItemContainer>
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
