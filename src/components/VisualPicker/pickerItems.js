import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

export default function PickerItems(props) {
    const { options, ariaDescribedby, onChange, value, name, required, multiple } = props;

    const isChecked = option => option.value === value;

    return options.map((option, index) => {
        const key = `picker-item-${index}`;
        return (
            <Item
                ariaDescribedby={ariaDescribedby}
                isChecked={isChecked(option)}
                required={required}
                onChange={onChange}
                name={name}
                key={key}
                multiple={multiple}
                {...option}
            />
        );
    });
}

PickerItems.propTypes = {
    ariaDescribedby: PropTypes.string,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    multiple: PropTypes.bool.isRequired,
    value: PropTypes.string,
};

PickerItems.defaultProps = {
    ariaDescribedby: undefined,
    onChange: () => {},
    value: undefined,
};
