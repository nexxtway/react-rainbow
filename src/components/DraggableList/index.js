/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import Items from './items';

const DraggableList = props => {
    return (
        <Container>
            <Items {...props} />
        </Container>
    );
};

DraggableList.propTypes = {
    keyField: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
};

DraggableList.defaultProps = {
    data: [],
};

export default DraggableList;
