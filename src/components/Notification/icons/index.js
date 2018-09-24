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

export default function Icon({ icon }) {
}

    function getClassName() {
        return classnames('rainbow-notification_icon-container', {
            [`rainbow-notification_icon--${icon}`]: typeof icon === 'string',
        });
    }

    if (typeof icon === 'string') {
        return (
            <div className={getClassName()}>
                {iconMap[icon]()}
            </div>
        );
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
