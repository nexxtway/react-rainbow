import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function BadgeIcon(props) {
    const { isVisible, iconName, className } = props;
    if (isVisible) {
        return <Icon size="xx-small" iconName={iconName} className={className} />;
    }
    return null;
}

BadgeIcon.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired,
    className: PropTypes.string,
};

BadgeIcon.defaultProps = {
    className: '',
};

export default BadgeIcon;
