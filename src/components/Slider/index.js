import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import Label from './label';
import './style.css';

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

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-slider_container', className);
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
            hideLabel,
        } = this.props;
        return (
            <div className={this.getContainerClassName()} style={style}>
                <Label label={label} hideLabel={hideLabel} sliderId={this.sliderId} />
                <div className="rainbow-slider">
                    <input
                        id={this.sliderId}
                        className="rainbow-slider_range"
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

                    <span className="rainbow-slider_value" aria-hidden>
                        {value}
                    </span>
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.errorMessageId} className="rainbow-slider_error">
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

Slider.propTypes = {
    /** The text label for the slider. Provide your own label to describe the slider.
     * Otherwise, no label is displayed. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the slider label */
    hideLabel: PropTypes.bool,
    /** The numerical value of the slider. This value defaults to 0. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
