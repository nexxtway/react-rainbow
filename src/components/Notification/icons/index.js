/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InfoIcon from './infoIcon';
import ErrorIcon from './errorIcon';
import SuccessIcon from './successIcon';
import WarningIcon from './warningIcon';

const iconMap = {
    info: () => <InfoIcon />,
    error: () => <ErrorIcon />,
    warning: () => <WarningIcon />,
    success: () => <SuccessIcon />,
};

function VariantIcon({ icon }) {
    function getClassName() {
        return classnames('rainbow-notification_icon-container', {
            [`rainbow-notification_icon--${icon}`]: typeof icon === 'string',
        });
    }

    if (iconMap[icon]) {
        return (
            <div className={getClassName()}>
                {iconMap[icon]()}
            </div>
        );
    }
    return null;
}

export default function Icon({ icon }) {
    if (typeof icon === 'string') {
        return <VariantIcon icon={icon} />;
    }
    return (
        <div className="rainbow-notification_icon-container">
            {icon}
        </div>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
};

Icon.defaultProps = {
    icon: null,
};
