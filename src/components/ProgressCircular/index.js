import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import normalizeValue from './normalizeValue';
import ProgressRing from './progressRing';
import StyledContainer from './styled/container';
import StyledPercentValue from './styled/percentValue';

/**
 * ProgressCircular component communicates to the user the progress of a particular process.
 */
export default function ProgressCircular(props) {
    const { value, variant, assistiveText, className, style } = props;

    const normalizedValue = normalizeValue(value);

    return (
        <StyledContainer
            className={className}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={normalizedValue}
            role="progressbar"
            style={style}
        >
            <ProgressRing variant={variant} percent={normalizedValue} />
            <StyledPercentValue variant={variant}>{`${normalizedValue}%`}</StyledPercentValue>
            <AssistiveText text={assistiveText} />
        </StyledContainer>
    );
}

ProgressCircular.propTypes = {
    /** The percentage value of the progress circular. It must be between 0 and 100. */
    value: PropTypes.number,
    /** The variant of the progress circular. Valid values are brand and success. */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ProgressCircular.defaultProps = {
    value: 0,
    variant: 'brand',
    assistiveText: '',
    className: undefined,
    style: undefined,
};
