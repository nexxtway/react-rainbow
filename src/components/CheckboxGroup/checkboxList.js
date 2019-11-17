import React from 'react';
import PropTypes from 'prop-types';
import isOptionSelected from './isOptionSelected';
import Checkbox from '../Input/inputCheckbox/checkbox';

export default function CheckboxList(props) {
    const { values, options, onChange, describedBy, name, error } = props;
    return options.map((option, index) => {
        const key = `checkbox-${index}`;

        return (
            <Checkbox
                {...option}
                checked={isOptionSelected(values, option)}
                onChange={onChange}
                ariaDescribedBy={describedBy}
                key={key}
                name={name}
                error={error}
            />
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
