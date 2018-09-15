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
        return classnames('rainbow-checkbox-toggle', className);
    }

    render() {
        const {
            style,
            disabled,
            label,
            value,
            onChange,
            id,
        } = this.props;

        return (
            <label id={id} className={this.getClassNames()} style={style}>
                <input
                    type="checkbox"
                    name={this.toggleId}
                    value={this.toggleId}
                    aria-describedby={this.toggleId}
                    checked={value}
                    onChange={onChange}
                    disabled={disabled} />

                <span id={this.toggleId} className="rainbow-checkbox-toggle_faux-container" aria-live="assertive">
                    <span className="rainbow-checkbox-toggle_faux" />
                </span>
                <RenderIf isTrue={!!label} >
                    <span className="rainbow-checkbox-toggle_label">{label}</span>
                </RenderIf>
            </label>
        );
    }
}

CheckboxToggle.propTypes = {
    /** Text label for the checkbox toggle. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The value of the element. */
    value: PropTypes.bool,
    /** Specifies that the element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

CheckboxToggle.defaultProps = {
    label: null,
    disabled: false,
    value: false,
    onChange: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
};
