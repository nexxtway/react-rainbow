import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Icon(props) {
    const {
        icon,
        position,
        error,
    } = props;

    const getIconClassNames = () => {
        if (error) {
            return `rainbow-input__icon rainbow-input__icon_${position}`;
        }
        return classnames(
            'rainbow-icon rainbow-input__icon rainbow-icon-text-default',
            `rainbow-input__icon_${position}`,
        );
    };

    if (icon) {
        return (
            <span className={getIconClassNames()}>
                {icon}
            </span>
        );
    }
    return null;
}

Icon.propTypes = {
    icon: PropTypes.node,
    error: PropTypes.node,
    position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    icon: null,
    error: null,
};
