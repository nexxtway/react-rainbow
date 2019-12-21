import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import Label from '../Input/label/index';
import StyledContainer from './styled/container';
import StyledSlider from './styled/slider';
import StyledInputRange from './styled/inputRange';
import StyledValue from './styled/value';
import ErrorText from '../Input/styled/errorText';

/**
 * An input range slider lets the user specify a numeric value which must be between
 * two specified values.
 * @category Form
 */
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.sliderId = uniqueId('slider-id');
        this.errorMessageId = uniqueId('error-message');
        this.sliderRef = React.createRef();
    }

    getAriaDescribedBy() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.sliderRef.current.click();
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.sliderRef.current.focus();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.sliderRef.current.blur();
    }

    render() {
        const {
            label,
            value,
            name,
            min,
            max,
            step,
            error,
            disabled,
            onBlur,
            onChange,
            onClick,
            onFocus,
            style,
            className,
            hideLabel,
        } = this.props;
        return (
            <StyledContainer className={className} style={style}>
                <Label label={label} hideLabel={hideLabel} inputId={this.sliderId} />
                <StyledSlider>
                    <StyledInputRange
                        id={this.sliderId}
                        type="range"
                        name={name}
                        value={value}
                        min={min}
                        max={max}
                        step={step}
                        aria-describedby={this.getAriaDescribedBy()}
                        disabled={disabled}
                        onClick={onClick}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        ref={this.sliderRef}
                    />

                    <StyledValue aria-hidden>{value}</StyledValue>
                </StyledSlider>
                <RenderIf isTrue={!!error}>
                    <ErrorText id={this.errorMessageId}>{error}</ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Slider.propTypes = {
    /** The text label for the slider. Provide your own label to describe the slider.
     * Otherwise, no label is displayed. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the slider label */
    hideLabel: PropTypes.bool,
    /** The numerical value of the slider. This value defaults to 0. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The name of the Slider. */
    name: PropTypes.string,
    /** The min value of the slider. This value defaults to 0. */
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The max value of the slider. This value defaults to 100. */
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The step increment value of the slider. Example steps include 0.1, 1, or 10.
     * This value defaults to 1. */
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Specifies that the slider element must have a value selected before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the slider element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Slider.defaultProps = {
    label: null,
    value: undefined,
    name: undefined,
    min: 0,
    max: 100,
    step: 1,
    error: undefined,
    disabled: false,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: null,
    hideLabel: false,
};
