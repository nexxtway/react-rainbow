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
        labelId,
    } = props;

    const inputs = value.map((inputValue, index) => {
        const inputIndex = index;
        const isActive = inputIndex === focusedIndex;
        const inputRef = isActive ? ref : null;
        const inputId = isActive ? id : `${id}-${index}`;
        const inputTabIndex = isActive ? tabIndex : -1;
        const ariaLabelledBy = isActive ? labelId : null;

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
                ariaLabelledBy={ariaLabelledBy}
            />
        );
    });

    return <div>{inputs}</div>;
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
    labelId: PropTypes.labelId,
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
    labelId: undefined,
};

export default InputItems;
