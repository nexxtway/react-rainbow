import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveCheckbox from '../../PrimitiveCheckbox';
import StyledWrapper from './styled/wrapper';
import StyledCheckboxWrapper from './styled/checkboxWrapper';
import StyledScrollShadow from './styled/scrollShadow';

const bulkStateMap = { all: true, some: 'indeterminate', none: false };
export default function SelectableHeader(props) {
    const {
        onSelectAllRows,
        onDeselectAllRows,
        tableId,
        maxRowSelection,
        bulkSelection,
        hasScroll,
        style,
        variant,
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
        return (
            <StyledWrapper as="th" style={style} scope="col" tabIndex={-1} variant={variant}>
                <StyledScrollShadow hasScroll={hasScroll} />
            </StyledWrapper>
        );
    }

    return (
        <StyledWrapper as="th" style={style} scope="col" tabIndex={-1} variant={variant}>
            <StyledCheckboxWrapper style={style} variant={variant}>
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
            <StyledScrollShadow hasScroll={hasScroll} />
        </StyledWrapper>
    );
}

SelectableHeader.propTypes = {
    onSelectAllRows: PropTypes.func,
    onDeselectAllRows: PropTypes.func,
    tableId: PropTypes.string.isRequired,
    maxRowSelection: PropTypes.number,
    bulkSelection: PropTypes.oneOf(['none', 'some', 'all']),
    hasScroll: PropTypes.bool,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['default', 'listview']),
};

SelectableHeader.defaultProps = {
    onSelectAllRows: () => {},
    onDeselectAllRows: () => {},
    maxRowSelection: undefined,
    bulkSelection: 'none',
    hasScroll: false,
    style: undefined,
    variant: 'default',
};
