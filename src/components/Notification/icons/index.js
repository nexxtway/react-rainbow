import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InfoIcon from './infoIcon';
import ErrorIcon from './errorIcon';
import SuccessIcon from './successIcon';
import WarningIcon from './warningIcon';
import '../styles.css';

const iconMap = {
    info: () => <InfoIcon />,
    error: () => <ErrorIcon />,
    warning: () => <WarningIcon />,
    success: () => <SuccessIcon />,
};

export default function Icon(props) {
    const {
        className,
        style,
        icon,
    } = props;

    function getClassName() {
        return classnames('rainbow-notification_icon-container', {
            [`rainbow-notification_icon--${icon}`]: typeof icon === 'string',
        }, className);
    }

    if (typeof icon === 'string') {
        return (
            <div className={getClassName()} style={style}>
                {iconMap[icon]()}
            </div>
        );
    }
    return (
        <div className={getClassName()} style={style}>
            {icon}
        </div>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

Icon.defaultProps = {
    icon: null,
    className: undefined,
    style: undefined,
};
