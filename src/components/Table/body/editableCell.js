import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RelativeElement from '../../Structural/relativeElement';
import { StyledInput, IconContainer, StyledButtonIcon } from './styled/styledEditableCell';
import Edit from './icons/edit';
import Cancel from './icons/cancel';

export default function EditableCell(props) {
    const { value, onChange, row, field } = props;
    const inputRef = useRef(null);

    const handleMouseDown = event => {
        event.preventDefault();
        inputRef.current.focus();
        onChange('', row);
    };

    return (
        <RelativeElement>
            <StyledInput
                value={value}
                onChange={event => onChange(event.target.value, row)}
                ref={inputRef}
                aria-label={field}
            />
            <IconContainer iconPosition="right">
                <Edit />
            </IconContainer>
            <StyledButtonIcon
                variant="base"
                icon={<Cancel />}
                size="medium"
                onMouseDown={handleMouseDown}
                assistiveText="Clear"
            />
        </RelativeElement>
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
