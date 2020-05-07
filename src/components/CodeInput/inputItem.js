import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled';

const InputItem = React.forwardRef((props, ref) => {
    const {
        value,
        index,
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
        id,
        isActive,
    } = props;

    const handleOnChange = (e, inputIndex) => {
        onChange(e.target.value, inputIndex);
    };

    const handleOnKeyDown = (e, inputIndex) => {
        const shouldMovePrev = !value && e.key === 'Backspace';
        if (shouldMovePrev) {
            onChange('', inputIndex - 1);
        }
        onKeyDown(e);
    };

    return (
        <StyledInput
            key={index}
            value={value}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            error={error}
            tabIndex={tabIndex}
            onClick={e => onClick(e, index)}
            onChange={e => handleOnChange(e, index)}
            onFocus={e => onFocus(e, index)}
            onBlur={e => onBlur(e, index)}
            onKeyDown={e => handleOnKeyDown(e, index)}
            onPaste={onPaste}
            ref={ref}
            pattern="\d*"
            maxLength="1"
            id={id}
            isActive={isActive}
        />
    );
});

InputItem.propTypes = {
    value: PropTypes.string,
    index: PropTypes.number,
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
    isActive: PropTypes.bool,
};

InputItem.defaultProps = {
    value: '',
    index: 0,
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
    isActive: false,
};

export default InputItem;
