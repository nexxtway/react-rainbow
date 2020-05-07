import React from 'react';
import { DELETE_KEY } from '../../libs/constants';
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

    const handleOnChange = (inputValue, inputIndex) => {
        onChange(inputValue, inputIndex);
    };

    const handleOnKeyDown = (e, inputIndex) => {
        const shouldMovePrev = !value && e.keyCode === DELETE_KEY;
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
            onClick={onClick}
            onChange={e => handleOnChange(e.target.value, index)}
            onFocus={e => onFocus(e, index)}
            onBlur={onBlur}
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
