import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ESCAPE_KEY, ENTER_KEY } from '../../../libs/constants';
import RenderIf from '../../RenderIf';
import {
    StyledInput,
    StyledButtonIcon,
    StyledSpan,
    SpanContainer,
    RelativeInputContainer,
    StyledEditIcon,
} from './styled/editableCell';
import Cancel from './icons/cancel';

export default function EditableCell(props) {
    const { value, onChange, row, field } = props;
    const [isEditMode, setIsEditMode] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditMode) {
            inputRef.current.focus();
        }
    }, [isEditMode]);

    const handleMouseDown = event => {
        event.preventDefault();
        inputRef.current.focus();
        setInternalValue('');
    };

    const handleOnChange = event => {
        setInternalValue(event.target.value);
    };

    const fireOnChange = () => {
        if (value !== internalValue) {
            onChange({ value: internalValue, row });
        }
        setIsEditMode(false);
    };

    const handleOnClick = () => {
        setIsEditMode(true);
    };

    const handleOnKeyDown = event => {
        if (event.keyCode === ESCAPE_KEY) {
            setInternalValue(value);
            setIsEditMode(false);
        }
        if (event.keyCode === ENTER_KEY) {
            fireOnChange();
        }
    };

    return (
        <>
            <RenderIf isTrue={!isEditMode}>
                <SpanContainer onClick={handleOnClick}>
                    <StyledSpan title={value}>{value}</StyledSpan>
                    <StyledEditIcon />
                </SpanContainer>
            </RenderIf>
            <RenderIf isTrue={isEditMode}>
                <RelativeInputContainer>
                    <StyledInput
                        value={internalValue}
                        onChange={handleOnChange}
                        ref={inputRef}
                        aria-label={field}
                        onBlur={fireOnChange}
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
