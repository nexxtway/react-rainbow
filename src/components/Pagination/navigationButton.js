/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import StyledLi from './styled/li';

export default function NavigationButton(props) {
    const { onClick, icon, disabled, dataId, ariaLabel } = props;

    const handleOnClick = event => {
        if (!disabled) {
            onClick(event);
        }
    };

    const getTabIndex = () => {
        if (disabled) {
            return -1;
        }
        return 0;
    };

    return (
        <StyledLi>
            <StyledButton
                disabled={disabled}
                data-id={dataId}
                onClick={handleOnClick}
                aria-disabled={!!disabled}
                tabIndex={getTabIndex()}
                aria-label={ariaLabel}
            >
                {icon}
            </StyledButton>
        </StyledLi>
    );
}

NavigationButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    dataId: PropTypes.string,
    ariaLabel: PropTypes.string,
};

NavigationButton.defaultProps = {
    disabled: false,
    dataId: undefined,
    ariaLabel: undefined,
};
