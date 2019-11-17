import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Input/inputRadio/radio';

export default function RadioItems(props) {
    const { options, ariaDescribedby, onChange, value, name, error } = props;

    const isChecked = option => option.value === value;

    return options.map((option, index) => {
        const key = `radio-${index}`;
        return (
            <Radio
                {...option}
                key={key}
                onChange={onChange}
                checked={isChecked(option)}
                ariaDescribedby={ariaDescribedby}
                name={name}
                error={error}
            />
        );
    });
}

RadioItems.propTypes = {
    ariaDescribedby: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
};

RadioItems.defaultProps = {
    ariaDescribedby: undefined,
    value: undefined,
    onChange: () => {},
};
