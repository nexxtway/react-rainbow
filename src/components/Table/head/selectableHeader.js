import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveCheckbox from '../../PrimitiveCheckbox';
import StyledWrapper from './styled/wrapper';
import StyledCheckboxWrapper from './styled/checkboxWrapper';

const bulkStateMap = { all: true, some: 'indeterminate', none: false };
export default function SelectableHeader(props) {
    const {
        onSelectAllRows,
        onDeselectAllRows,
        tableId,
        maxRowSelection,
        bulkSelection,
        style,
    } = props;
    const name = `${tableId}-options`;
    const isDisabled = maxRowSelection === 0;
    const isRadio = maxRowSelection === 1;
    const checked = bulkStateMap[bulkSelection];

    const handleClick = event => {
        if (bulkSelection === 'none') {
            return onSelectAllRows(event);
        }
        return onDeselectAllRows(event);
    };

    if (isRadio) {
        return <StyledWrapper as="th" style={style} scope="col" tabIndex={-1} />;
    }

    return (
        <StyledWrapper as="th" style={style} scope="col" tabIndex={-1}>
            <StyledCheckboxWrapper style={style}>
                <PrimitiveCheckbox
                    name={name}
                    label="select all rows"
                    hideLabel
                    type="checkbox"
                    tabIndex="-1"
                    checked={checked}
                    disabled={isDisabled}
                    onClick={handleClick}
                />
            </StyledCheckboxWrapper>
        </StyledWrapper>
    );
}

SelectableHeader.propTypes = {
    onSelectAllRows: PropTypes.func,
    onDeselectAllRows: PropTypes.func,
    tableId: PropTypes.string.isRequired,
    maxRowSelection: PropTypes.number,
    bulkSelection: PropTypes.oneOf(['none', 'some', 'all']),
    style: PropTypes.object,
};

SelectableHeader.defaultProps = {
    onSelectAllRows: () => {},
    onDeselectAllRows: () => {},
    maxRowSelection: undefined,
    bulkSelection: 'none',
    style: undefined,
};
