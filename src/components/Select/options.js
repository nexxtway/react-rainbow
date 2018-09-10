import React from 'react';
import PropTypes from 'prop-types';

export default function Options({ options }) {
    return options.map((option, index) => {
        const key = `option-${index}`;
        return (
            <option value={option.value} disabled={option.disabled} key={key}>
                {option.label}
            </option>
        );
    });
}

Options.propTypes = {
    options: PropTypes.array.isRequired,
};
