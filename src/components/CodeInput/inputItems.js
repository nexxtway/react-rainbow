import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getLoopArray from './helpers/getLoopArray';
import isNumeric from './helpers/isNumeric';
import getSingleInputValueFromCode from './helpers/getSingleInputValueFromCode';
import { StyledInput } from './styled';

const setFocus = ref => {
    if (ref && ref.current) {
        ref.current.focus();
        ref.current.select();
    }
};

const InputItems = React.forwardRef((props, ref) => {
    const {
        value,
        length,
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
    } = props;

    const [inputRefIndex, setInputRefIndex] = useState(0);

    useEffect(() => {
        setFocus(ref);
    });

    useEffect(() => {
        setFocus(ref);
    }, [ref, inputRefIndex]);

    const handleOnChange = (inputValue, inputIndex) => {
        if (inputValue !== '' && !isNumeric(inputValue)) return;

        const setInputIndexCallback = () => {
            const currentLength = value && value.length ? value.length : 0;
            const nextInputIndex = currentLength < inputIndex ? currentLength + 1 : inputIndex + 1;

            if (inputValue !== '' && nextInputIndex < length) {
                setInputRefIndex(nextInputIndex);
            }
        };

        if (value && value[inputIndex] && value[inputIndex] === inputValue) {
            setInputIndexCallback();
        } else {
            onChange(inputValue, inputIndex, setInputIndexCallback);
        }
    };

    const handleOnFocus = (e, inputIndex) => {
        setInputRefIndex(inputIndex);
        onFocus(e);
    };

    const handleOnKeyDown = (e, inputIndex) => {
        const currentInputValue = value && value[inputIndex] ? value[inputIndex] : '';
        if (e.key === currentInputValue) {
            const nextInputIndex = inputIndex < length - 1 ? inputIndex + 1 : length - 1;
            setInputRefIndex(nextInputIndex);
        }
        onKeyDown(e);
    };

    const handleOnPaste = e => {
        const clipboard = e.clipboardData
            .getData('Text')
            .match(/\d+/g)
            .join('');
        onChange(clipboard, 0);
    };

    const inputs = getLoopArray(length).map((v, index) => {
        const inputIndex = index;
        const inputRef = inputIndex === inputRefIndex ? ref : null;
        const inputValue = getSingleInputValueFromCode(value, inputIndex, length);

        return (
            <StyledInput
                key={inputIndex}
                value={inputValue}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                error={error}
                tabIndex={tabIndex}
                onClick={onClick}
                onChange={e => handleOnChange(e.target.value, inputIndex)}
                onFocus={e => handleOnFocus(e, inputIndex)}
                onBlur={onBlur}
                onKeyDown={handleOnKeyDown}
                onPaste={e => handleOnPaste(e, inputIndex)}
                ref={inputRef}
                pattern="\d*"
                maxLength="1"
            />
        );
    });

    return <div>{inputs}</div>;
});

InputItems.propTypes = {
    value: PropTypes.string,
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
};

InputItems.defaultProps = {
    value: undefined,
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
};

export default InputItems;
