/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Spinner extends Component {
    getContainerClass() {
        const { size, variant } = this.props;

        return classnames('slds-spinner', {
            'slds-spinner_brand': variant === 'brand',
            'slds-spinner_inverse': variant === 'inverse',
            'slds-spinner_large': size === 'large',
            'slds-spinner_medium': size === 'medium',
            'slds-spinner_small': size === 'small',
            'slds-spinner_x-small': size === 'x-small',
            'slds-spinner_xx-small': size === 'xx-small',
        });
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

    renderSpinner() {
        return (
            <div className={this.getContainerClass()} role="status">
                {this.renderAssistiveText()}
                <div className="slds-spinner__dot-a" />
                <div className="slds-spinner__dot-b" />
            </div>
        );
    }

    render() {
        return this.props.isVisible ? this.renderSpinner() : null;
    }
}

Spinner.propTypes = {
    /** Description for assistive sreen readers */
    assistiveText: PropTypes.string,
    /** Show/Hide the spinner */
    isVisible: PropTypes.bool,
    /** The size of the spinner */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small', 'xx-small']),
    /** The variant of the spinner */
    variant: PropTypes.oneOf(['default', 'brand', 'inverse']),
};

Spinner.defaultProps = {
    isVisible: true,
    size: 'medium',
    variant: 'default',
};
