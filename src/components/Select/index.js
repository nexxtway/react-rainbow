import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../Input/requiredAsterisk';
import Options from './options';
import './styles.css';

/**
* Select element presents a menu of options.
*/
export default class Select extends Component {
    constructor(props) {
        super(props);
        this.selectId = uniqueId('select');
    }

    getContainerClassNames() {
        const { classNames, error } = this.props;
        return classnames('rainbow-select-container', {
            'rainbow-select-has-error': error,
        }, classNames);
    }

    render() {
        const {
            label,
            value,
            onChange,
            error,
            required,
            disabled,
            options,
            style,
        } = this.props;
        const isRequiredOrHasError = !!(required || error);

        return (
            <div className={this.getContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <label className="rainbow-select-label" htmlFor={this.selectId}>
                        <RequiredAsterisk required={isRequiredOrHasError} />
                        {label}
                    </label>
                </RenderIf>
                <div className="rainbow-select-inner-container" disabled={disabled}>
                    <select
                        className="rainbow-select"
                        id={this.selectId}
                        onChange={onChange}
                        value={value}
                        required={isRequiredOrHasError}
                        disabled={disabled}>

                        <Options options={options} />
                    </select>
                </div>
                <RenderIf isTrue={!!error}>
                    <div className="rainbow-select-error">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

Select.propTypes = {
    /** Text label for the select. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies the selected value. */
    value: PropTypes.string,
    /** The action triggered when a option item is selected. */
    onChange: PropTypes.func,
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The option items to be displayed. */
    options: PropTypes.arrayOf(PropTypes.shape(
        {
            label: PropTypes.oneOfType([
                PropTypes.string, PropTypes.node,
            ]),
            value: PropTypes.string,
            disabled: PropTypes.bool,
        })),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    classNames: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Select.defaultProps = {
    label: null,
    value: undefined,
    onChange: () => {},
    error: null,
    required: false,
    disabled: false,
    options: [],
    classNames: undefined,
    style: undefined,
};
