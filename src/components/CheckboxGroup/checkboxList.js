import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import Checkbox from './checkbox';

export default function CheckboxList({ values, options, onChange, describedBy }) {
    const checkIfSelected = option => values.find(value => value === option.value) !== undefined;

    return options.map(option => (
        <Checkbox
            {...option}
            isSelected={checkIfSelected(option)}
            onChange={onChange}
            describedBy={describedBy}
            key={uniqueId('checkbox')} />
    ));
}

CheckboxList.propTypes = {
    options: PropTypes.array.isRequired,
    values: PropTypes.array,
    onChange: PropTypes.func,
    describedBy: PropTypes.string,
};

CheckboxList.defaultProps = {
    values: [],
    checkIfSelected: () => {},
    onChange: () => {},
    describedBy: undefined,
};
