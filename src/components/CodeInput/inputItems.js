import React from 'react';
import PropTypes from 'prop-types';
import InputItem from './inputItem';

const InputItems = React.forwardRef((props, ref) => {
    const {
        value,
        disabled,
        required,
        readOnly,
        error,
        tabIndex,
        onClick,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
        onPaste,
        focusedIndex,
    } = props;

    const inputs = value.map((inputValue, index) => {
        const inputIndex = index;
        const isActive = inputIndex === focusedIndex;
        const inputRef = isActive ? ref : null;
        const inputTabIndex = isActive ? tabIndex : -1;

        return (
            <InputItem
                key={inputIndex}
                value={inputValue}
                index={inputIndex}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                error={error}
                tabIndex={inputTabIndex}
                onClick={onClick}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onPaste={onPaste}
                ref={inputRef}
                isActive={isActive}
            />
        );
    });

    return <>{inputs}</>;
});

InputItems.propTypes = {
    value: PropTypes.array,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPaste: PropTypes.func,
    focusedIndex: PropTypes.number,
    id: PropTypes.string,
};

InputItems.defaultProps = {
    value: [],
    disabled: false,
    required: false,
    readOnly: false,
    error: null,
    tabIndex: undefined,
    onClick: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    onPaste: () => {},
    focusedIndex: undefined,
    id: undefined,
};

export default InputItems;
