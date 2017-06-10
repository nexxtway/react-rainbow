import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FORMAT_REGEX = /^[a-z]+:[a-z_0-9]+$/;

export default class Icon extends Component {
    render() {
        const {
            assistiveText,
            iconName,
            style,
            title
        } = this.props;
        const isIconNameCorrect = FORMAT_REGEX.test(iconName);
        
        if (isIconNameCorrect) {
            const sprite = iconName.split(':')[0];
            const icon = iconName.split(':')[1];

            return (
                <span className={ this.getContainerClass() } title={ title } style={ style }>
                    <svg className={ this.getSvgClass() } aria-hidden="true">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
                    </svg>
                    <span className="slds-assistive-text">{ assistiveText }</span>
                </span>
            )
        }
        else {
            console.warn('The iconName prop is wrong');
            return null
        }
    }

    getContainerClass() {
        const { className, iconName } = this.props;
        const icon = iconName.replace(':', '-');
        const actionRegExp = /^action:.+/;
        const isAction = actionRegExp.test(iconName)

        return classnames('slds-icon_container', {
            'slds-icon_container_circle': isAction
        }, `slds-icon-${icon}`, className);
    }

    getSvgClass() {
        const { iconName, variant, size } = this.props;
        const utilityRegExp = /^utility:.+/;
        const isUtility = utilityRegExp.test(iconName);
        const actionRegExp = /^action:.+/;
        const isAction = actionRegExp.test(iconName)

        if (!isUtility && variant) {
            console.warn('variant only make sense for utitlity sprites');
        }

        return classnames('slds-icon', {
            'slds-icon-text-default': isUtility && variant === 'default',
            'slds-icon-text-light': isUtility && variant === 'light',
            'slds-icon-text-error': isUtility && variant === 'error',
            'slds-icon-text-warning': isUtility && variant === 'warning'
        }, {
            'slds-icon_large': size === 'large' && !isAction, 
            'slds-icon_small': size === 'small' && !isAction,
            'slds-icon_x-small': size === 'x-small' && !isAction,
            'slds-icon_xx-small': size === 'xx-small' && !isAction
        });
    } 
}

Icon.propTypes = {
    /** Description for assistive screen readers if is required */
    assistiveText: PropTypes.string,
    /** Class for custom styles */
    className: PropTypes.string,
    /** The icon name. It is required. It take the following format: ‘sprite name:icon name’ e.g. ‘utility:add’ */
    iconName: PropTypes.string.isRequired,
    /** The icon size */
    size: PropTypes.oneOf(['large', 'medium','small', 'x-small', 'xx-small']),
    /** Object with the custom styles. The properties must be in camelCase naming convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** The title that is showed when a user hover the icon. It is necessary if the icon sits alone and a sighted user might need to hover for a description */
    title: PropTypes.string,
    /** The fill color of the svg icon */
    variant: PropTypes.oneOf(['default', 'light', 'error', 'warning'])
}

Icon.defaultProps = {
    size: 'medium'
}