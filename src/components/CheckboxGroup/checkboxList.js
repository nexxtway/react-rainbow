import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checkbox';

export default function CheckboxList({ options, checkIfSelected, onChange, describedBy }) {
    return options.map(option =>
        (
            <Checkbox
            {...option}
            isSelected={checkIfSelected(option)}
            onChange={onChange}
            describedBy={describedBy} />
        ),
    );
}

CheckboxList.propTypes = {
    options: PropTypes.array.isRequired,
    checkIfSelected: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    describedBy: PropTypes.string.isRequired,
};
