import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('checkboxInput');
    }
    render() {
        const {
            value,
            label,
            disabled,
            isSelected,
            onChange,
            describedBy,
        } = this.props;

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

                <label className="rainbow-checkbox_label-container" htmlFor={this.inputId}>
                    <span className="rainbow-checkbox_faux" />
                    <span className="rainbow-checkbox_label">{label}</span>
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onChange: PropTypes.func,
    describedBy: PropTypes.string,
};

Checkbox.defaultProps = {
    disabled: false,
    isSelected: false,
    onChange: () => {},
    describedBy: undefined,
};
