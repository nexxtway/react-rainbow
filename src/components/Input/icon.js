import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconSvg from '../IconSvg';

export default function Icon(props) {
    const {
        iconName,
        position,
        error,
    } = props;

    const getIconClassNames = () => {
        if (error) {
            return `slds-input__icon slds-input__icon_${position}`;
        }
        return classnames(
            'slds-icon slds-input__icon slds-icon-text-default',
            `slds-input__icon_${position}`,
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
