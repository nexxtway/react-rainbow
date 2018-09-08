import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox(props) {
    const { id, label, disabled, isSelected, onChange } = props;
    return (
        <div className="rainbow-checkbox" role="presentation" onClick={() => onChange(id, !isSelected, disabled)}>
            <input
                id={id}
                type="checkbox"
                value={id}
                checked={isSelected}
                disabled={disabled}
                readOnly />
            <label className="rainbow-checkbox__label" htmlFor={id}>
                <span className="rainbow-checkbox_faux" />
                <span className="rainbow-form-element__label">{label}</span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

// Checkbox.defaultProps = {};

