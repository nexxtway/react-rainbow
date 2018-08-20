import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconSvg from '../IconSvg';


export default function Icon(props) {
    const {
        isVisible,
        iconName,
        position,
        error,
    } = props;

    const getIconClassNames = () => {
        if (error) {
            return 'slds-input__icon';
        }
        return classnames(
            'slds-icon slds-input__icon slds-icon-text-default',
            `slds-input__icon_${position}`,
        );
    };

    if (isVisible) {
        return <IconSvg iconName={iconName} className={getIconClassNames()} />;
    }
    return null;
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    position: PropTypes.string.isRequired,
    error: PropTypes.node.isRequired,
};

Icon.defaultProps = {
    isVisible: false,
};
