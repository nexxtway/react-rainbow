/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function AssistiveText({ text }) {
    if (text) {
        return <span className="slds-assistive-text">{text}</span>;
    }
    return null;
}

export default class Spinner extends Component {
    getVariantClassNames() {
        const { variant } = this.props;
        if (variant !== 'base') {
            return `slds-spinner_${variant}`;
        }
        return null;
    }

    getContainerClass() {
        const { className, size } = this.props;

        return classnames('slds-spinner', `slds-spinner_${size}`, this.getVariantClassNames(), className);
    }

    renderSpinner() {
        const { assistiveText, style } = this.props;
        return (
            <div className={this.getContainerClass()} style={style} role="status">
                <AssistiveText text={assistiveText} />
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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Description for assistive sreen readers */
    assistiveText: PropTypes.string,
    /** Show/Hide the spinner */
    isVisible: PropTypes.bool,
    /** The size of the spinner */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small', 'xx-small']),
    /** The variant of the spinner */
    variant: PropTypes.oneOf(['base', 'brand', 'inverse']),
};

Spinner.defaultProps = {
    className: undefined,
    style: {},
    assistiveText: null,
    isVisible: true,
    size: 'medium',
    variant: 'base',
};
