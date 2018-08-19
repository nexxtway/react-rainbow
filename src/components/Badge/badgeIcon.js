import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

function BadgeIcon(props) {
    const { isVisible, iconName, iconPosition, label } = props;

    const iconClassName = () => {
        const hasLabel = label !== undefined && label !== null;
        return classnames({
            'slds-m-right_xx-small': hasLabel && iconPosition === 'left',
            'slds-m-left_xx-small': hasLabel && iconPosition === 'right',
        });
    };

    if (isVisible) {
        return <Icon size="xx-small" iconName={iconName} className={iconClassName()} />;
    }
    return null;
}

BadgeIcon.propTypes = {
    isVisible: PropTypes.bool,
    iconName: PropTypes.string,
    iconPosition: PropTypes.string,
    label: PropTypes.node,

};

BadgeIcon.defaultProps = {
    isVisible: false,
    iconName: null,
    iconPosition: null,
    label: null,
};

export default BadgeIcon;
