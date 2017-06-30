/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconSvg from '../IconSvg';

export default class Icon extends Component {
    getContainerClass() {
        const { className, iconName } = this.props;
        const icon = iconName.replace(':', '-');
        const actionRegExp = /^action:.+/;
        const isAction = actionRegExp.test(iconName);

        return classnames('slds-icon_container', {
            'slds-icon_container_circle': isAction,
        }, `slds-icon-${icon}`, className);
    }

    render() {
        const {
            assistiveText,
            iconName,
            style,
            size,
            title,
            variant,
        } = this.props;

        return (
            <span className={this.getContainerClass()} title={title} style={style}>
                <IconSvg className="slds-icon" iconName={iconName} size={size} variant={variant} />
                <span className="slds-assistive-text">{ assistiveText }</span>
            </span>
        );
    }
}

Icon.propTypes = {
    /** Description for assistive screen readers if is required */
    assistiveText: PropTypes.string,
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
    /** The title that is showed when a user hover the icon. It is necessary
     if the icon sits alone and a sighted user might need to hover for a description */
    title: PropTypes.string,
    /** The fill color of the svg icon */
    variant: PropTypes.oneOf(['default', 'light', 'error', 'warning', 'bare']),
};

Icon.defaultProps = {
    size: 'medium',
};
