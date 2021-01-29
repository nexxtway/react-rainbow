import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/searchIcon';
import { MessageContainer, MessageDescription, MessageHighLight } from './styled';
import RenderIf from '../RenderIf';

export default function EmptyMessage({ searchValue }) {
    const message = searchValue
        ? 'Our robots did not find any match for:'
        : 'Type something to search';
    return (
        <MessageContainer data-id="internal-dropdown-empty-message">
            <SearchIcon />
            <MessageDescription>{message}</MessageDescription>
            <RenderIf isTrue={searchValue}>
                <MessageHighLight> “{searchValue}”</MessageHighLight>
            </RenderIf>
        </MessageContainer>
    );
}

EmptyMessage.propTypes = {
    searchValue: PropTypes.string,
};

EmptyMessage.defaultProps = {
    searchValue: undefined,
};
