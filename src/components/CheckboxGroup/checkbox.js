import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('checkboxInput');
    }

    getLabelClassNames() {
        const { disabled } = this.props;
        return classnames('rainbow-checkbox-group_checkbox-label', {
            'rainbow-checkbox-group_checkbox-label--disabled': disabled,
        });
    }

    render() {
        const { value, label, disabled, isSelected, onChange, describedBy, name } = this.props;

        return (
            <div className="rainbow-checkbox-group_checkbox">
                <input
                    id={this.inputId}
                    type="checkbox"
                    value={value}
                    checked={isSelected}
                    disabled={disabled}
                    onChange={onChange}
                    aria-describedby={describedBy}
                    name={name}
                />

                <label
                    className="rainbow-checkbox-group_checkbox-label-container"
                    htmlFor={this.inputId}
                >
                    <span className="rainbow-checkbox-group_checkbox-faux" />
                    <span className={this.getLabelClassNames()}>{label}</span>
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onChange: PropTypes.func,
    describedBy: PropTypes.string,
    name: PropTypes.string,
};

Checkbox.defaultProps = {
    disabled: false,
    isSelected: false,
    onChange: () => {},
    describedBy: undefined,
    name: undefined,
};
