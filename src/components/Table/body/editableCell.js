import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import Edit from './icons/edit';
import {
    StyledInput,
    IconContainer,
    StyledButtonIcon,
    StyledSpan,
    SpanContainer,
    RelativeInputContainer,
} from './styled/editableCell';
import Cancel from './icons/cancel';

export default function EditableCell(props) {
    const { value, onChange, row, field } = props;
    const [editable, setEditable] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [editable]);

    const handleMouseDown = event => {
        event.preventDefault();
        inputRef.current.focus();
        setInternalValue('');
    };

    const handleOnChange = event => {
        setInternalValue(event.target.value);
    };

    const handleOnBlur = () => {
        if (value !== internalValue) {
            onChange(internalValue, row);
        }
        setEditable(false);
    };

    const handleOnClick = () => {
        setEditable(true);
    };

    const handleOnKeyDown = event => {
        if (event.keyCode === 27) {
            setInternalValue(value);
            setEditable(false);
        }
        if (event.keyCode === 13) {
            handleOnBlur();
        }
    };

    return (
        <>
            <RenderIf isTrue={!editable}>
                <SpanContainer onClick={handleOnClick}>
                    <StyledSpan title={value}>{value}</StyledSpan>
                    <IconContainer>
                        <Edit />
                    </IconContainer>
                </SpanContainer>
            </RenderIf>
            <RenderIf isTrue={editable}>
                <RelativeInputContainer>
                    <StyledInput
                        value={internalValue}
                        onChange={handleOnChange}
                        ref={inputRef}
                        aria-label={field}
                        onBlur={handleOnBlur}
                        onKeyDown={handleOnKeyDown}
                    />
                    <StyledButtonIcon
                        variant="base"
                        icon={<Cancel />}
                        size="medium"
                        onMouseDown={handleMouseDown}
                        assistiveText="Clear"
                    />
                </RelativeInputContainer>
            </RenderIf>
        </>
    );
}

EditableCell.propTypes = {
    value: PropTypes.any,
    row: PropTypes.object,
    onChange: PropTypes.func,
    field: PropTypes.string,
};

EditableCell.defaultProps = {
    value: undefined,
    row: {},
    onChange: () => {},
    field: undefined,
};
