import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import { LEFT_KEY, RIGHT_KEY } from '../../../libs/constants';
import StyledCellContainer from './styled/cellContainer';
import StyledCheckboxContainer from './styled/checkboxContainer';

export default function SelectableCell(props) {
    const { isSelected, isDisabled, tableId, onSelectRow, onDeselectRow, inputType } = props;
    const name = `${tableId}-options`;
    const isRadio = inputType === 'radio';

    const handleMouseDown = event => {
        if (event.shiftKey) {
            event.preventDefault();
        }
    };

    const handleClick = event => {
        const isMultipleSelection = !isRadio && event.shiftKey;
        if (isRadio && isSelected) {
            return;
        }
        if (isSelected) {
            onDeselectRow(event, isMultipleSelection);
        } else {
            onSelectRow(event, isMultipleSelection);
        }
    };

    const handleKeyDown = event => {
        const { keyCode } = event;
        if (isRadio && (keyCode === LEFT_KEY || keyCode === RIGHT_KEY)) {
            event.preventDefault();
        }
    };

    return (
        <StyledCellContainer role="gridcell" tabIndex={-1}>
            <StyledCheckboxContainer role="presentation" onMouseDown={handleMouseDown}>
                <Input
                    className="rainbow-table_cell-checkbox"
                    name={name}
                    label="select row"
                    hideLabel
                    type={inputType}
                    tabIndex="-1"
                    checked={isSelected}
                    disabled={isDisabled}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                />
            </StyledCheckboxContainer>
        </StyledCellContainer>
    );
}

SelectableCell.propTypes = {
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    tableId: PropTypes.string.isRequired,
    onSelectRow: PropTypes.func,
    onDeselectRow: PropTypes.func,
    inputType: PropTypes.string,
};

SelectableCell.defaultProps = {
    isSelected: false,
    isDisabled: false,
    onSelectRow: () => {},
    onDeselectRow: () => {},
    inputType: 'checkbox',
};
