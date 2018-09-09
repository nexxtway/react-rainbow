import React from 'react';
import PropTypes from 'prop-types';
import Radio from './radio';

export default function RadioItems(props) {
    const {
        options,
        ariaDescribedby,
        onChange,
        value,
        name,
    } = props;

    const isChecked = option => option.value === value;

    return (
        options.map(option => (
            <Radio
                value={option.value}
                onChange={onChange}
                isChecked={isChecked(option)}
                label={option.label}
                disabled={option.disabled}
                ariaDescribedby={ariaDescribedby}
                name={name} />
        ))
    );
}

RadioItems.propTypes = {
    ariaDescribedby: PropTypes.string,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
};

RadioItems.defaultProps = {
    ariaDescribedby: undefined,
    onChange: () => {},
};
