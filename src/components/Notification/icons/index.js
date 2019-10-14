/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from './infoIcon';
import ErrorIcon from './errorIcon';
import SuccessIcon from './successIcon';
import WarningIcon from './warningIcon';
import StyledIconContainer from '../styled/iconContainer';

const iconMap = {
    info: () => <InfoIcon />,
    error: () => <ErrorIcon />,
    warning: () => <WarningIcon />,
    success: () => <SuccessIcon />,
};

function VariantIcon({ icon }) {
    if (iconMap[icon]) {
        return <StyledIconContainer icon={icon}>{iconMap[icon]()}</StyledIconContainer>;
    }
    return null;
}

export default function Icon({ icon }) {
    if (typeof icon === 'string') {
        return <VariantIcon icon={icon} />;
    }
    return <StyledIconContainer>{icon}</StyledIconContainer>;
}

Icon.propTypes = {
    icon: PropTypes.node,
};

Icon.defaultProps = {
    icon: null,
};
