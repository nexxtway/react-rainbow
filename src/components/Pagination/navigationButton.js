import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function getClassName(disabled) {
    return classnames('rainbow-pagination_navigation-button', {
        'rainbow-pagination_navigation-button--disabled': disabled,
    });
}

export default function NavigationButton(props) {
    const { onClick, icon, disabled } = props;

    return (
        <li className={getClassName(disabled)}>
            <a onClick={onClick} role="presentation" aria-disabled={!!disabled}>
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
