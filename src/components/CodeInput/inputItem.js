import React from 'react';
import PropTypes from 'prop-types';
import { DELETE_KEY } from '../../libs/constants';
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
        isActive,
    } = props;

    const handleOnKeyDown = (event, inputIndex) => {
        const shouldMovePrev = inputIndex !== 0 && !value && event.keyCode === DELETE_KEY;
        if (shouldMovePrev) {
            onChange('', inputIndex - 1);
        }
        onKeyDown(event);
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
            onChange={event => onChange(event.target.value, index)}
            onFocus={event => onFocus(event, index)}
            onBlur={onBlur}
            onKeyDown={event => handleOnKeyDown(event, index)}
            onPaste={onPaste}
            ref={ref}
            pattern="\d*"
            maxLength="1"
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
