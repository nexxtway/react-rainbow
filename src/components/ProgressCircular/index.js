import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from './../AssistiveText';
import normalizeValue from './normalizeValue';
import ProgressRing from './progressRing';
import './styles.css';

/**
 * ProgressCircular component communicates to the user the progress of a particular process.
 */
export default function ProgressCircular({ value, variant, assistiveText }) {
    const getContainerClassNames = () =>
        classnames('rainbow-progress-circular', {
            'rainbow-progress-circular--success': variant === 'success',
        });

    const normalizedValue = normalizeValue(value);

    return (
        <div className={getContainerClassNames()}>
            <ProgressRing percent={normalizedValue} />
            <span className="rainbow-progress-circular_percent-text">{`${value}%`}</span>
            <AssistiveText text={assistiveText} />
        </div>
    );
}

ProgressCircular.propTypes = {
    /** The percentage value of the progress circular. It must be between 0 and 100. */
    value: PropTypes.number,
    /** The variant of the progress circular. Valid values are brand and success. */
    variant: PropTypes.oneOf(['brand', 'success']),
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
};

ProgressCircular.defaultProps = {
    value: 0,
    variant: 'brand',
    assistiveText: '',
};
