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
        id,
    } = props;

    const inputs = value.map((inputValue, index) => {
        const inputIndex = index;
        const isActive = inputIndex === focusedIndex;
        const inputRef = isActive ? ref : null;
        const inputId = isActive ? id : null;
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
                id={inputId}
                isActive={isActive}
            />
        );
    });

    return <div>{inputs}</div>;
});

InputItems.propTypes = {
    value: PropTypes.array,
    length: PropTypes.number,
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
    length: 4,
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
