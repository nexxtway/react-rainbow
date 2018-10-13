import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import Label from './label';
import './style.css';
import RenderIf from '../RenderIf';

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
        } = this.props;
        return (
            <div className={this.getContainerClassName()} style={style}>
                <Label label={label} sliderId={this.sliderId} />
                <div className="rainbow-slider">
                    <input
                        id={this.sliderId}
                        className="rainbow-slider_range"
                        type="range"
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
                        ref={this.sliderRef} />

                    <span className="rainbow-slider_value" aria-hidden>{value}</span>
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.errorMessageId} className="rainbow-slider_error">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

Slider.propTypes = {
    /** Text label for the slider. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies the value of the slider. */
    value: PropTypes.string,
    /** Specifies the minimum value of a specified range */
    min: PropTypes.string,
    /** Specifies the maximum value of a specified range */
    max: PropTypes.string,
    /** Indicates the granularity that is expected by limiting the allowed values */
    step: PropTypes.string,
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
};
