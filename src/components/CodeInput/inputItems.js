import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useReduxForm } from './../../libs/hooks';
import { getLoopArray, getValidValue, isNumeric } from './helpers';
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
        codeLength,
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
    } = useReduxForm(props);

    const arrayValue = value.split('');
    const defaultActiveIndex = value ? arrayValue.length - 1 : 0;
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    useEffect(() => {
        setFocus(ref);
    });

    useEffect(() => {
        setFocus(ref);
    }, [ref, activeIndex]);

    const handleOnChange = (inputValue, inputIndex) => {
        const shouldChange = inputValue === '' || (inputValue !== '' && isNumeric(inputValue));
        if (shouldChange) {
            const filteredValue = inputValue.match(/\d+/g);
            const newValue = filteredValue ? filteredValue.join('') : '';
            const shouldMovePrev = newValue === '' && inputIndex !== 0;
            const shouldMoveNext = newValue !== '' && inputIndex <= codeLength - 1;
            onChange(newValue, inputIndex);
            if (shouldMovePrev) setActiveIndex(inputIndex - 1);
            if (shouldMoveNext) setActiveIndex(inputIndex + 1);
        }
    };

    const handleOnFocus = e => {
        setFocus(ref);
        onFocus(e);
    };

    const handleOnKeyDown = (e, inputIndex) => {
        const shouldMovePrev = e.key === 'Backspace' && !arrayValue[inputIndex];
        if (shouldMovePrev) {
            const newIndex = inputIndex !== 0 ? inputIndex - 1 : 0;
            onChange('', newIndex);
            setActiveIndex(newIndex);
        }
        onKeyDown(e);
    };

    const handleOnPaste = e => {
        const clipboard = getValidValue(e.clipboardData.getData('Text'));
        const copiedLength = clipboard.split('').length;
        const newIndex = copiedLength < codeLength ? copiedLength : copiedLength - 1;
        onChange(clipboard, 0);
        setActiveIndex(newIndex);
    };

    const inputs = getLoopArray(codeLength).map((v, index) => {
        const inputIndex = index;
        const inputValue = arrayValue[inputIndex] ? arrayValue[inputIndex] : '';
        const inputRef = inputIndex === activeIndex ? ref : null;
        const inputTabIndex = inputIndex === activeIndex ? tabIndex : -1;

        return (
            <StyledInput
                key={inputIndex}
                value={inputValue}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                error={error}
                tabIndex={inputTabIndex}
                onClick={onClick}
                onChange={e => handleOnChange(e.target.value, inputIndex)}
                onFocus={e => handleOnFocus(e)}
                onBlur={onBlur}
                onKeyDown={e => handleOnKeyDown(e, inputIndex)}
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
    codeLength: PropTypes.number,
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
    value: '',
    codeLength: 4,
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
