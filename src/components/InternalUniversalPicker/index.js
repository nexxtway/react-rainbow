import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';

/**
 * InternalUniversalPicker.
 * @category Internal
 */
export default function InternalUniversalPicker(props) {
    const { value, multiple, onChange, children, ...rest } = props;

    const handleChange = (optionName, isChecked) => {
        if (multiple) {
            if (Array.isArray(value)) {
                const currentValue = isChecked
                    ? [...value, optionName]
                    : value.filter(item => item !== optionName);

                return onChange(currentValue);
            }

            const currentValue = isChecked ? [optionName] : [];
            return onChange(currentValue);
        }
        return onChange(optionName);
    };

    const context = {
        onChange: handleChange,
        value,
        multiple,
        ...rest,
    };

    return <Provider value={context}>{children}</Provider>;
}

InternalUniversalPicker.propTypes = {
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

InternalUniversalPicker.defaultProps = {
    value: undefined,
    onChange: () => {},
    children: [],
    multiple: false,
};
