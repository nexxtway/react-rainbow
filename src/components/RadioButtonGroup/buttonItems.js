import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonItem from './radioButtonItem';

export default function ButtonItems(props) {
    const { options, ariaDescribedby, onChange, value, name, required, variant } = props;

    const isChecked = option => option.value === value;

    return options.map((option, index) => {
        const key = `radiobutton-${index}`;
        return (
            <RadioButtonItem
                key={key}
                itemRef={option.optionRef}
                required={required}
                onChange={onChange}
                isChecked={isChecked(option)}
                ariaDescribedby={ariaDescribedby}
                name={name}
                variant={variant}
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
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
        'border-inverse',
    ]),
};

ButtonItems.defaultProps = {
    ariaDescribedby: undefined,
    value: undefined,
    onChange: () => {},
    variant: 'neutral',
};
