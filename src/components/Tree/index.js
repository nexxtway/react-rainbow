import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import TreeChildren from './tree-children';

const TreeContainer = styled.ul``;

const Tree = props => {
    const { data, onExpandCollapse, onSelect } = props;

    return (
        <TreeContainer>
            <TreeChildren data={data} onExpandCollapse={onExpandCollapse} onSelect={onSelect} />
        </TreeContainer>
    );
};

Tree.propTypes = {
    data: propTypes.array,
    onExpandCollapse: propTypes.func,
    onSelect: propTypes.func,
};

Tree.defaultProps = {
    data: [],
    onExpandCollapse: () => {},
    onSelect: () => {},
};

export default Tree;
