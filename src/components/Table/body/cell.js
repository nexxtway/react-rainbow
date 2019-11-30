import React from 'react';
import PropTypes from 'prop-types';
import { SELECTABLE_CHECKBOX } from '../helpers/columns';
import SelectableCell from './selectableCell';
import ActionsCell from './actionsCell';
import StyledCell from './styled/cell';
import StyledCellContent from './styled/cellContent';

function CellValue(props) {
    const { component: CellComponent, value, rowData, restColumnProps } = props;

    if (CellComponent) {
        return <CellComponent {...restColumnProps} value={value} row={rowData} />;
    }
    return <span title={value}>{value}</span>;
}

CellValue.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
    rowData: PropTypes.object,
    restColumnProps: PropTypes.object.isRequired,
};

CellValue.defaultProps = {
    component: undefined,
    value: undefined,
    rowData: {},
};

export default function Cell(props) {
    const {
        header,
        component,
        value,
        columnType,
        isFirst,
        columnChildren,
        rowIndex,
        rowsLength,
        rowData,
        isSelected,
        isDisabled,
        tableId,
        onSelectRow,
        onDeselectRow,
        inputType,
        restColumnProps,
    } = props;

    const getHeaderLabel = () => {
        if (typeof header === 'string') {
            return header;
        }
        return undefined;
    };

    if (columnType === 'action') {
        return (
            <ActionsCell
                columnChildren={columnChildren}
                rowIndex={rowIndex}
                rowsLength={rowsLength}
                rowData={rowData}
            />
        );
    }

    if (columnType === SELECTABLE_CHECKBOX) {
        return (
            <SelectableCell
                isSelected={isSelected}
                isDisabled={isDisabled}
                tableId={tableId}
                onSelectRow={onSelectRow}
                onDeselectRow={onDeselectRow}
                inputType={inputType}
            />
        );
    }

    if (isFirst) {
        return (
            <StyledCell scope="row" tabIndex={-1} data-label={getHeaderLabel()}>
                <StyledCellContent>
                    <CellValue
                        component={component}
                        value={value}
                        rowData={rowData}
                        restColumnProps={restColumnProps}
                    />
                </StyledCellContent>
            </StyledCell>
        );
    }

    return (
        <StyledCell as="td" role="gridcell" tabIndex={-1} data-label={getHeaderLabel()}>
            <StyledCellContent>
                <CellValue
                    component={component}
                    value={value}
                    rowData={rowData}
                    restColumnProps={restColumnProps}
                />
            </StyledCellContent>
        </StyledCell>
    );
}

Cell.propTypes = {
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    component: PropTypes.func,
    value: PropTypes.any,
    isFirst: PropTypes.bool,
    columnType: PropTypes.string,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    tableId: PropTypes.string.isRequired,
    onSelectRow: PropTypes.func,
    onDeselectRow: PropTypes.func,
    inputType: PropTypes.string,
    columnChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    rowsLength: PropTypes.number,
    rowIndex: PropTypes.number,
    rowData: PropTypes.object,
    restColumnProps: PropTypes.object.isRequired,
};

Cell.defaultProps = {
    header: undefined,
    component: undefined,
    value: undefined,
    isFirst: false,
    columnType: undefined,
    isSelected: false,
    isDisabled: false,
    onSelectRow: () => {},
    onDeselectRow: () => {},
    inputType: 'checkbox',
    columnChildren: undefined,
    rowsLength: undefined,
    rowIndex: undefined,
    rowData: {},
};
