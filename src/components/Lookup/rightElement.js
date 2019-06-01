import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import CloseIcon from './icons/closeIcon';
import RenderIf from '../RenderIf';

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
    return (
        <RenderIf isTrue={searchIcon}>
            <span className="rainbow-lookup_input-icon">{searchIcon}</span>
        </RenderIf>
    );
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
