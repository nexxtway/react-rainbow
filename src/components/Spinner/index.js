import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from './../AssistiveText';

/**
* Spinners should be shown when retrieving data or performing slow computations,
* help to reassure the user that the system is actively retrieving data.
*/
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
    /** The variant changes the appearance of the spinner.
    * Accepted variants are base, brand, and inverse. This value defaults to base. */
    variant: PropTypes.oneOf([
        'base', 'brand', 'inverse',
    ]),
    /** The size of the spinner. Accepted sizes are small, medium, and large.
    * This value defaults to medium. */
    size: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** Show/Hide the spinner. */
    isVisible: PropTypes.bool,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Spinner.defaultProps = {
    variant: 'base',
    size: 'medium',
    isVisible: true,
    assistiveText: null,
    className: undefined,
    style: undefined,
};
