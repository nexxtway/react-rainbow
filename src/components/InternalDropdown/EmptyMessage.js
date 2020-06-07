import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/searchIcon';
import {
    MessageContainer,
    MessageTextContainer,
    MessageDescription,
    MessageHighLight,
} from './styled';

export default function EmptyMessage({ emptyMessage }) {
    return (
        <MessageContainer>
            <SearchIcon />
            <MessageTextContainer>
                <MessageDescription>Our robots did not find any match for</MessageDescription>
                <MessageHighLight> “{emptyMessage}”</MessageHighLight>
            </MessageTextContainer>
        </MessageContainer>
    );
}

EmptyMessage.propTypes = {
    emptyMessage: PropTypes.string,
};

EmptyMessage.defaultProps = {
    emptyMessage: undefined,
};
