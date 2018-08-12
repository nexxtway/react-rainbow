import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from './../AssistiveText';

export default function Spinner(props) {
    const {
        className,
        style,
        assistiveText,
        isVisible,
        size,
        variant,
    } = props;
    const getVariantClassNames = () => {
        if (variant === 'base') {
            return '';
        }
        return `slds-spinner_${variant}`;
    };

    const getContainerClassNames = () => classnames(
        'slds-spinner',
        `slds-spinner_${size}`,
        getVariantClassNames(),
        className,
    );

    if (isVisible) {
        return (
            <div className={getContainerClassNames()} style={style} role="status">
                <AssistiveText text={assistiveText} />
                <div className="slds-spinner__dot-a" />
                <div className="slds-spinner__dot-b" />
            </div>
        );
    }
    return null;
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
