import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../Input/requiredAsterisk';
import Checkbox from './checkbox';
import './styles.css';

export default class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getCheckboxValues() {
        const { options } = this.props;
        return options.map(option => (
            <Checkbox
                {...option}
                isSelected={this.checkIfSelected(option)}
                onChange={this.handleOnChange}
                key={uniqueId('checkbox')} />
        ));
    }

    getCheckboxContainerClassNames() {
        const { error } = this.props;
        return classnames('rainbow-checkbox-group-container', { 'rainbow-has-error': !!error });
    }

    handleOnChange(id, isSelected, disabled) {
        if (disabled) return;
        const { value: values, onChange } = this.props;
        if (!isSelected) {
            onChange(values.filter(valueId => valueId !== id));
        } else {
            onChange(values.concat([id]));
        }
    }

    checkIfSelected(option) {
        const { value: values } = this.props;
        return !!values.find(value => value === option.id);
    }

    render() {
        const { required, label, error } = this.props;
        return (
            <div className={this.getCheckboxContainerClassNames()}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-checkbox-group__label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-checkbox-group_checkbox-container">
                    {this.getCheckboxValues()}
                </div>
                <RenderIf isTrue={!!error}>
                    <div className="rainbow-form-element__help">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

CheckboxGroup.propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    label: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        disabled: PropTypes.bool,
    })),
    error: PropTypes.node,
};

CheckboxGroup.defaultProps = {
    value: [],
    onChange: () => {},
    label: null,
    required: false,
    options: [],
    error: null,
};

