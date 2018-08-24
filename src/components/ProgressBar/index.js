import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AsistiveText from './../AssistiveText';
import normalizeValue from './normalizeValue';

/**
* Progress bar component communicates to the user the progress of a particular process.
*/
export default function ProgressBar(props) {
    const {
        className,
        style,
        assistiveText,
        value,
        size,
        variant,
        color,
     } = props;

    const getContainerClassNames = () => classnames(
            'slds-progress-bar',
            `slds-progress-bar_${size}`,
            { 'slds-progress-bar_circular': variant === 'circular' },
            className,
        );

    const getProgressBarClassNames = () => classnames(
            'slds-progress-bar__value',
            { 'slds-progress-bar__value_success': color === 'success' },
        );

    const normalizedValue = normalizeValue(value);
    const WIDTH = { width: `${normalizedValue}%` };

    return (
            <div className={getContainerClassNames()}
                 aria-valuemin="0"
                 aria-valuemax="100"
                 aria-valuenow={normalizedValue}
                 role="progressbar"
                 style={style}>
                <span className={getProgressBarClassNames()} style={WIDTH}>
                    <AsistiveText text={assistiveText} />
                </span>
            </div>
    );
}

ProgressBar.propTypes = {
    /** The percentage value of the progress bar. It must be between 0 and 100. */
    value: PropTypes.number,
    /** The size of the progress bar. Valid values are x-small, small, medium, and large.
    * The default value is medium. */
    size: PropTypes.oneOf([
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** It is the progress bar color. The default value is brand. */
    color: PropTypes.oneOf([
        'brand', 'success',
    ]),
    /** The variant of the progress bar. Valid values are default and circular. */
    variant: PropTypes.oneOf([
        'default', 'circular',
    ]),
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ProgressBar.defaultProps = {
    value: 0,
    size: 'medium',
    color: 'brand',
    variant: 'default',
    assistiveText: '',
    className: '',
    style: {},
};
