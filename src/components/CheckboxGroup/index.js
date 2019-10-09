import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from './../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import CheckboxList from './checkboxList';
import './styles.css';

/**
 * A checkable input that communicates if an option is true, false or indeterminate.
 * @category Form
 */
class CheckboxGroup extends Component {
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

    getValue() {
        const { value } = this.props;
        if (typeof value === 'string') {
            return [];
        }
        return value;
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
        if (checked && Array.isArray(values)) {
            return onChange(values.concat([value]));
        }
        if (checked && !Array.isArray(values)) {
            return onChange([value]);
        }
        return onChange(values.filter(valueId => valueId !== value));
    }

    render() {
        const { id, options, required, label, error, style, name } = this.props;
        return (
            <fieldset id={id} className={this.getCheckboxContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-checkbox-group_label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-checkbox-group_content-container">
                    <CheckboxList
                        values={this.getValue()}
                        options={options}
                        onChange={this.handleOnChange}
                        describedBy={this.getErrorMessageId()}
                        name={name}
                    />
                </div>
                <RenderIf isTrue={!!error}>
                    <div
                        id={this.getErrorMessageId()}
                        className="rainbow-checkbox-group_text-error"
                    >
                        {error}
                    </div>
                </RenderIf>
            </fieldset>
        );
    }
}

CheckboxGroup.propTypes = {
    /** An Array of checkbox options with label, value and disabled for each checkbox. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            value: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    ),
    /** Text label for the checkbox group. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The name of the checkbox group */
    name: PropTypes.string,
    /** The list of selected checkboxes. Each array entry contains the value of a selected checkbox.
     * The value of each checkbox is set in the options attribute. */
    value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    /** Set to true if at least one checkbox must be selected. This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

CheckboxGroup.defaultProps = {
    options: [],
    value: [],
    label: null,
    name: undefined,
    onChange: () => {},
    required: false,
    error: null,
    className: undefined,
    style: undefined,
    id: undefined,
};

export default withReduxForm(CheckboxGroup);
