import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './radioButton';

export default function ButtonItems(props) {
    const { options, ariaDescribedby, onChange, value, name, required } = props;

    const isChecked = option => option.value === value;

    return options.map((option, index) => {
        const key = `radiobutton-${index}`;
        return (
            <RadioButton
                key={key}
                itemRef={option.optionRef}
                required={required}
                onChange={onChange}
                isChecked={isChecked(option)}
                ariaDescribedby={ariaDescribedby}
                name={name}
                {...option}
            />
        );
    });
}

ButtonItems.propTypes = {
    ariaDescribedby: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
};

ButtonItems.defaultProps = {
    ariaDescribedby: undefined,
    value: undefined,
    onChange: () => {},
};
