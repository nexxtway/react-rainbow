/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FORMAT_REGEX = /^[a-z]+:[a-z_0-9]+$/;
const UTILITY_REGEX = /^utility:.+/;
const ACTION_REGEX = /^action:.+/;

export default class IconSvg extends Component {
    getSvgClass() {
        const { className, iconName, size } = this.props;
        const { variant } = this.props;
        const isUtility = UTILITY_REGEX.test(iconName);
        const isAction = ACTION_REGEX.test(iconName);

        if (!isUtility && variant && variant !== 'bare') {
            console.warn('variant only make sense for utitlity sprites');
        }

        return classnames({
            'slds-icon-text-default': isUtility && (variant === 'default' || !variant),
            'slds-icon-text-light': isUtility && variant === 'light',
            'slds-icon-text-error': isUtility && variant === 'error',
            'slds-icon-text-warning': isUtility && variant === 'warning',
        }, {
            'slds-icon_large': size === 'large' && !isAction,
            'slds-icon_small': size === 'small' && !isAction,
            'slds-icon_x-small': size === 'x-small' && !isAction,
            'slds-icon_xx-small': size === 'xx-small' && !isAction,
        }, className);
    }

    render() {
        const { iconName, style } = this.props;
        const isIconNameValid = FORMAT_REGEX.test(iconName);

        if (isIconNameValid) {
            const sprite = iconName.split(':')[0];
            const icon = iconName.split(':')[1];

            return (
                <svg className={this.getSvgClass()} style={style} aria-hidden="true">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
                </svg>
            );
        }
        console.warn('The iconName prop is wrong');
        return null;
    }
}

IconSvg.propTypes = {
    /** Class for custom styles */
    className: PropTypes.string,
    /** The icon name. It is required. It take the following format:
     ‘sprite name:icon name’ e.g. ‘utility:add’ */
    iconName: PropTypes.string.isRequired,
    /** The icon size */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small', 'xx-small']),
    /** Object with the custom styles. The properties must be in camelCase
    naming convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** The fill color of the svg icon */
    variant: PropTypes.oneOf(['default', 'light', 'error', 'warning', 'bare']),
};
