/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function normalizeValue(value) {
    if (value < 0) {
        return 0;
    } else if (value > 100) {
        return 100;
    }
    return value;
}

export default class ProgressBar extends Component {
    getContainerClass() {
        const { className, size, variant } = this.props;

        return classnames('slds-progress-bar', {
            'slds-progress-bar_circular': variant === 'circular',
            'slds-progress-bar_x-small': size === 'x-small',
            'slds-progress-bar_small': size === 'small',
            'slds-progress-bar_medium': size === 'medium',
            'slds-progress-bar_large': size === 'large',
        }, className);
    }

    renderAssistiveText() {
        const { assistiveText } = this.props;

        if (assistiveText) {
            return (
                <span className="slds-assistive-text">
                    {assistiveText}
                </span>
            );
        }

        return null;
    }

    render() {
        const { value, style } = this.props;
        const normalizedValue = normalizeValue(value);

        return (
            <div className={this.getContainerClass()}
                 aria-valuemin="0"
                 aria-valuemax="100"
                 aria-valuenow={normalizedValue}
                 role="progressbar"
                 style={style} >
                <span className="slds-progress-bar__value" style={{ width: `${normalizedValue}%` }}>
                    {this.renderAssistiveText()}
                </span>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    /** Class for custom styles */
    className: PropTypes.string,
    /** Object with the custom styles. The properties must be in camelCase naming
     convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** Description for assistive screen reader */
    assistiveText: PropTypes.string,
    /** The size of the progress bar height */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    /** It is the current value of the progress bar. It must be between 0 and 100 */
    value: PropTypes.number,
    /** It is the progress bar variant */
    variant: PropTypes.oneOf(['square', 'circular']),
};

ProgressBar.defaultProps = {
    size: 'medium',
    value: 0,
    variant: 'square',
};
