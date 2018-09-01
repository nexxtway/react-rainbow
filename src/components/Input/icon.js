import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconSvg from '../IconSvg';
import './styles.css';

export default function Icon(props) {
    const {
        iconName,
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

    if (iconName) {
        return <IconSvg iconName={iconName} className={getIconClassNames()} />;
    }
    return null;
}

Icon.propTypes = {
    iconName: PropTypes.string,
    error: PropTypes.node,
    position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    iconName: undefined,
    error: null,
};
