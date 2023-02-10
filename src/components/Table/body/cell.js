import React from 'react';
import PropTypes from 'prop-types';
import { SELECTABLE_CHECKBOX, WITH_ENUMERABLE } from '../helpers/columns';
import EnumerableCell from './enumerableCell';
import SelectableCell from './selectableCell';
import EditableCell from './editableCell';
import ActionsCell from './actionsCell';
import StyledCell from './styled/cell';
import StyledCellContent from './styled/cellContent';

function CellValue(props) {
    const {
        component: CellComponent,
        value,
        rowData,
        isEditable,
        restColumnProps,
        onChange,
        field,
        rowIndex,
        type,
        cellAlignment,
    } = props;

    if (CellComponent) {
        return (
            <CellComponent
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...restColumnProps}
                value={value}
                row={rowData}
                index={rowIndex}
                isEditable={isEditable}
                onChange={onChange}
                type={type}
                cellAlignment={cellAlignment}
            />
        );
    }

    const editableResult =
        typeof isEditable === 'function'
            ? isEditable({ row: rowData, value, index: rowIndex })
            : isEditable;

    if (editableResult) {
        return (
            <EditableCell
                value={value}
                onChange={onChange}
                row={rowData}
                field={field}
                cellAlignment={cellAlignment}
            />
        );
    }
    return <span title={value}>{value}</span>;
}

CellValue.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
    rowData: PropTypes.object,
    restColumnProps: PropTypes.object.isRequired,
    isEditable: PropTypes.bool,
    onChange: PropTypes.func,
    field: PropTypes.string,
    rowIndex: PropTypes.number.isRequired,
    type: PropTypes.string,
    cellAlignment: PropTypes.string,
};

CellValue.defaultProps = {
    component: undefined,
    value: undefined,
    rowData: {},
    isEditable: false,
    onChange: () => {},
    field: undefined,
    type: undefined,
    cellAlignment: undefined,
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
        isEditable,
        onChange,
        cellAlignment,
        field,
    } = props;

    const getHeaderLabel = () => {
        if (typeof header === 'string') {
            return header;
        }
        return undefined;
    };

    if (columnType === WITH_ENUMERABLE) {
        return <EnumerableCell />;
    }

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
            <StyledCell
                scope="row"
                tabIndex={-1}
                data-label={getHeaderLabel()}
                isEditable={isEditable}
                cellAlignment={cellAlignment}
                component={component}
            >
                <StyledCellContent component={component} isEditable={isEditable}>
                    <CellValue
                        component={component}
                        value={value}
                        rowData={rowData}
                        restColumnProps={restColumnProps}
                        isEditable={isEditable}
                        onChange={onChange}
                        field={field}
                        rowIndex={rowIndex}
                        type={columnType}
                        cellAlignment={cellAlignment}
                    />
                </StyledCellContent>
            </StyledCell>
        );
    }

    return (
        <StyledCell
            as="td"
            role="gridcell"
            tabIndex={-1}
            data-label={getHeaderLabel()}
            isEditable={isEditable}
            cellAlignment={cellAlignment}
        >
            <StyledCellContent component={component} isEditable={isEditable}>
                <CellValue
                    component={component}
                    value={value}
                    rowData={rowData}
                    restColumnProps={restColumnProps}
                    isEditable={isEditable}
                    onChange={onChange}
                    field={field}
                    rowIndex={rowIndex}
                    type={columnType}
                    cellAlignment={cellAlignment}
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
    isEditable: PropTypes.bool,
    onChange: PropTypes.func,
    cellAlignment: PropTypes.string,
    field: PropTypes.string,
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
    isEditable: false,
    onChange: () => {},
    cellAlignment: undefined,
    field: undefined,
};
