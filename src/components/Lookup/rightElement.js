import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/searchIcon';
import ButtonIcon from '../ButtonIcon';
import CloseIcon from './icons/closeIcon';

export default function RightElement({ showCloseButton, onClear, onFocus }) {
    if (showCloseButton) {
        return (
            <span className="rainbow-lookup_input-close-button-container">
                <ButtonIcon
                    size="small"
                    tabIndex={-1}
                    icon={<CloseIcon />}
                    onClick={onClear}
                    onFocus={onFocus} />
            </span>
        );
    }
    return (
        <span className="rainbow-lookup_input-icon">
            {<SearchIcon />}
        </span>
    );
}

RightElement.propTypes = {
    showCloseButton: PropTypes.bool,
    onClear: PropTypes.func,
    onFocus: PropTypes.func,
};

RightElement.defaultProps = {
    showCloseButton: false,
    onClear: () => {},
    onFocus: () => {},
};
