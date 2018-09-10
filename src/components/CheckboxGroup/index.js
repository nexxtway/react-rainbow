import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../Input/requiredAsterisk';
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
            'rainbow-checkbox-group-container',
            { 'rainbow-checkbox-group-has-error': !!error },
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
                    <legend className="rainbow-checkbox-group-label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-checkbox-group-checkbox-container">

                    <CheckboxList
                        values={value}
                        options={options}
                        onChange={this.handleOnChange}
                        describedBy={this.getErrorMessageId()} />
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-checkbox-group-error">{error}</div>
                </RenderIf>
            </fieldset>
        );
    }
}

CheckboxGroup.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    label: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        disabled: PropTypes.bool,
    })),
    error: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

CheckboxGroup.defaultProps = {
    value: [],
    onChange: () => {},
    label: null,
    required: false,
    options: [],
    error: null,
    className: undefined,
    style: undefined,
};

