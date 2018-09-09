/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import './styles.css';

/**
* Checkbox toggle is a checkable input that communicates if an option is true,
* false or indeterminate.
*/
export default class CheckboxToggle extends Component {
    constructor(props) {
        super(props);
        this.toggleId = uniqueId('checkbox-toggle');
    }

    getClassNames() {
        const { className } = this.props;
        return classnames('rainbow-checkbox_toggle', className);
    }

    render() {
        const {
            style,
            disabled,
            label,
            value,
            onChange,
        } = this.props;

        return (
            <label className={this.getClassNames()} style={style}>
                <input
                    type="checkbox"
                    name={this.toggleId}
                    value={this.toggleId}
                    aria-describedby={this.toggleId}
                    checked={value}
                    onChange={onChange}
                    disabled={disabled} />
                <span id={this.toggleId} className="rainbow-checkbox__toggle_faux_container" aria-live="assertive">
                    <span className="rainbow-checkbox__toggle_faux" />
                </span>
                <RenderIf isTrue={!!label} >
                    <span className="rainbow-checkbox_toggle-form-element__label">{label}</span>
                </RenderIf>
            </label>
        );
    }
}

CheckboxToggle.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Specifies that the element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The toggle label */
    label: PropTypes.node,
    /** The value of the element. */
    value: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
};

CheckboxToggle.defaultProps = {
    className: undefined,
    style: undefined,
    disabled: false,
    label: null,
    value: false,
    onChange: () => {},
};
