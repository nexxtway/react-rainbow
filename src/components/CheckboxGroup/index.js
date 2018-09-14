import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import CheckboxList from './checkboxList';
import './styles.css';

/**
* A checkable input that communicates if an option is true, false or indeterminate.
*/
export default class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.errorMessageId = uniqueId('error-message');
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    getCheckboxContainerClassNames() {
        const { error, className } = this.props;
        return classnames(
            'rainbow-checkbox-group_container',
            { 'rainbow-checkbox-group--error': !!error },
            className,
        );
    }

    handleOnChange(event) {
        const { value, checked } = event.target;
        const { value: values, onChange } = this.props;
        if (checked) {
            onChange(values.concat([value]));
        } else {
            onChange(values.filter(valueId => valueId !== value));
        }
    }

    render() {
        const { value, options, required, label, error, style } = this.props;
        return (
            <fieldset className={this.getCheckboxContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-checkbox-group_label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-checkbox-group_checkbox-container">
                    <CheckboxList
                        values={value}
                        options={options}
                        onChange={this.handleOnChange}
                        describedBy={this.getErrorMessageId()} />

                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-checkbox-group_help-error">{error}</div>
                </RenderIf>
            </fieldset>
        );
    }
}

CheckboxGroup.propTypes = {
    /** An Array of checkbox options with label, value and disabled for each checkbox. */
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOfType([
            PropTypes.string, PropTypes.node,
        ]),
        value: PropTypes.string,
        disabled: PropTypes.bool,
    })),
    /** Text label for the checkbox group. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The list of selected checkboxes. Each array entry contains the value of a selected checkbox.
    * The value of each checkbox is set in the options attribute. */
    value: PropTypes.arrayOf(PropTypes.string),
    /** Set to true if at least one checkbox must be selected. This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Text label for the checkbox group. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

CheckboxGroup.defaultProps = {
    options: [],
    value: [],
    label: null,
    onChange: () => {},
    required: false,
    error: null,
    className: undefined,
    style: undefined,
};
