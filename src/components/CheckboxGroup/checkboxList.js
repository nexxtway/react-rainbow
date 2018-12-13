import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checkbox';
import isOptionSelected from './is-option-selected';

export default function CheckboxList({ values, options, onChange, describedBy, name }) {
    return options.map((option, index) => {
        const key = `checkbox-${index}`;
        return (
            <Checkbox
                {...option}
                isSelected={isOptionSelected(values, option)}
                onChange={onChange}
                describedBy={describedBy}
                key={key}
                name={name} />
        );
    });
}

CheckboxList.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    values: PropTypes.array,
    onChange: PropTypes.func,
    describedBy: PropTypes.string,
};

CheckboxList.defaultProps = {
    values: [],
    onChange: () => {},
    describedBy: undefined,
    name: undefined,
};
