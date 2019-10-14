import React from 'react';
import PropTypes from 'prop-types';
import AsistiveText from './../AssistiveText';
import normalizeValue from './normalizeValue';
import StyledContainer from './styled/container';
import StyledBar from './styled/bar';

/**
 * Progress bar component communicates to the user the progress of a particular process.
 */
export default function ProgressBar(props) {
    const { className, style, assistiveText, value, size, variant } = props;

    const normalizedValue = normalizeValue(value);
    const WIDTH = { width: `${normalizedValue}%` };

    return (
        <StyledContainer
            className={className}
            style={style}
            size={size}
            variant={variant}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={normalizedValue}
            role="progressbar"
        >
            <StyledBar variant={variant} style={WIDTH}>
                <AsistiveText text={assistiveText} />
            </StyledBar>
        </StyledContainer>
    );
}

ProgressBar.propTypes = {
    /** The percentage value of the progress bar. It must be between 0 and 100. */
    value: PropTypes.number,
    /** The size of the progress bar. Valid values are x-small, small, medium, and large.
     * The default value is medium. */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** The variant of the progress bar. Valid values are brand and success. */
    variant: PropTypes.oneOf(['brand', 'success']),
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
    variant: 'brand',
    assistiveText: '',
    className: undefined,
    style: undefined,
};
