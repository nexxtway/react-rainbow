import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

function BadgeIcon(props) {
    const { isVisible, iconName, iconPosition, label } = props;

    const getIconClassName = () => {
        const hasLabel = label !== undefined && label !== null;
        return classnames('slds-align_absolute-center', {
            'slds-m-right_xx-small': hasLabel && iconPosition === 'left',
            'slds-m-left_xx-small': hasLabel && iconPosition === 'right',
        });
    };

    if (isVisible) {
        return <Icon size="xx-small" iconName={iconName} className={getIconClassName()} />;
    }
    return null;
}

BadgeIcon.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    iconName: PropTypes.string,
    iconPosition: PropTypes.string.isRequired,
    label: PropTypes.node,

};

BadgeIcon.defaultProps = {
    iconName: '',
    label: null,
};

export default BadgeIcon;
