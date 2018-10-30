/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function NavigationButton(props) {
    const { onClick, icon, disabled, dataId, ariaLabel } = props;

    const getClassName = () => classnames('rainbow-pagination_navigation-button-content', {
        'rainbow-pagination_navigation-button-content--disabled': disabled,
    });

    const handleOnClick = (event) => {
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
        <li className="rainbow-pagination_navigation-button">
            <a
                className={getClassName()}
                data-id={dataId}
                onClick={handleOnClick}
                href="javascript:void(0);"
                aria-disabled={!!disabled}
                tabIndex={getTabIndex()}
                aria-label={ariaLabel}>
                {icon}
            </a>
        </li>
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
