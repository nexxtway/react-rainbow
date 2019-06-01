import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import CloseIcon from './icons/closeIcon';
import SearchIcon from './icons/searchIcon';

export default function RightElement({ showCloseButton, onClear, closeIcon, searchIcon }) {
    if (showCloseButton) {
        return (
            <span className="rainbow-lookup_input-close-button-container">
                <ButtonIcon
                    assistiveText="close"
                    size="small"
                    title="close"
                    tabIndex={-1}
                    icon={closeIcon || <CloseIcon />}
                    onClick={onClear}
                />
            </span>
        );
    }
    return <span className="rainbow-lookup_input-icon">{searchIcon || <SearchIcon />}</span>;
}

RightElement.propTypes = {
    searchIcon: PropTypes.node,
    closeIcon: PropTypes.node,
    showCloseButton: PropTypes.bool,
    onClear: PropTypes.func,
};

RightElement.defaultProps = {
    searchIcon: undefined,
    closeIcon: undefined,
    showCloseButton: false,
    onClear: () => {},
};
