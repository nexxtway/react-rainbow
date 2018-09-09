import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('checkboxInput');
    }
    render() {
        const { value, label, disabled, isSelected, onChange, describedBy } = this.props;
        return (
            <div className="rainbow-checkbox">
                <input
                    id={this.inputId}
                    type="checkbox"
                    value={value}
                    checked={isSelected}
                    disabled={disabled}
                    onChange={onChange}
                    aria-describedby={describedBy} />
                <label className="rainbow-checkbox-label-container" htmlFor={this.inputId}>
                    <span className="rainbow-checkbox-faux" />
                    <span className="rainbow-checkbox-label">{label}</span>
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    describedBy: PropTypes.string.isRequired,
};
