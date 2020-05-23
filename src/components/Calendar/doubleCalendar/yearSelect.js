import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from '../../../libs/hooks';
import RenderIf from '../../RenderIf';
// import Select from '../../Select';
import StyledYearLabel from './styled/yearLabel';
import StyledSelect from './styled/select';

export default function YearSelect(props) {
    const { currentYear, yearsRange, onYearChange } = props;
    const selectRef = useRef();
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => setEditMode(!editMode);
    const [listenOutsideClick, stopListeningOutsideClick] = useOutsideClick(
        selectRef,
        toggleEditMode,
    );

    useEffect(() => {
        if (editMode) {
            listenOutsideClick();
        }

        return () => {
            if (editMode) {
                stopListeningOutsideClick();
            }
        };
    }, [editMode, listenOutsideClick, stopListeningOutsideClick]);

    const handleYearChange = value => {
        setEditMode(false);
        onYearChange(value);
    };

    return (
        <div ref={selectRef}>
            <RenderIf isTrue={!editMode}>
                <StyledYearLabel onClick={toggleEditMode}>{currentYear}</StyledYearLabel>
            </RenderIf>
            <RenderIf isTrue={editMode}>
                <StyledSelect
                    label="select year"
                    hideLabel
                    value={currentYear}
                    options={yearsRange}
                    onChange={handleYearChange}
                />
            </RenderIf>
        </div>
    );
}

YearSelect.propTypes = {
    currentYear: PropTypes.number,
    yearsRange: PropTypes.arrayOf(PropTypes.object),
    onYearChange: PropTypes.func,
};

YearSelect.defaultProps = {
    currentYear: undefined,
    yearsRange: undefined,
    onYearChange: () => {},
};
