import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AsistiveText from './../AssistiveText';
import normalizeValue from './normalizeValue';

/** Progress bar component communicates to the user the progress of a particular process. */

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
    variant: PropTypes.oneOf(['default', 'circular']),
    /** It is the progress bar color */
    color: PropTypes.oneOf(['brand', 'success']),
};

ProgressBar.defaultProps = {
    className: '',
    style: {},
    size: 'medium',
    value: 0,
    variant: 'default',
    assistiveText: '',
    color: 'brand',
};
