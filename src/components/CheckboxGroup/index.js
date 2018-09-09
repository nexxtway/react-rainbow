import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../Input/requiredAsterisk';
import CheckboxList from './checkboxList';
import './styles.css';

export default class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.checkboxGruopId = uniqueId('checkboxGroup');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.checkIfSelected = this.checkIfSelected.bind(this);
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

    checkIfSelected(option) {
        const { value: values } = this.props;
        return values.find(value => value === option.value) !== undefined;
    }

    render() {
        const { options, required, label, error, style } = this.props;
        return (
            <fieldset className={this.getCheckboxContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-checkbox-group-label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div id={this.checkboxGruopId} className="rainbow-checkbox-group-checkbox-container">

                    <CheckboxList
                        options={options}
                        checkIfSelected={this.checkIfSelected}
                        onChange={this.handleOnChange}
                        describedBy={this.checkboxGruopId} />
                </div>
                <RenderIf isTrue={!!error}>
                    <div className="rainbow-checkbox-group-error">{error}</div>
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

