import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function NavigationButton(props) {
    const { onClick, icon, disabled } = props;

    const getClassName = () => classnames('rainbow-pagination_navigation-button', {
        'rainbow-pagination_navigation-button--disabled': disabled,
    });

    return (
        <li className={getClassName()}>
            <a
                className="rainbow-pagination_navigation-button-content"
                onClick={onClick}
                role="presentation"
                aria-disabled={!!disabled}>
                {icon}
            </a>
        </li>
    );
}

NavigationButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
};

NavigationButton.defaultProps = {
    disabled: false,
};
