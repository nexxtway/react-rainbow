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
    } = props;

    if (CellComponent) {
        return (
            <CellComponent
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...restColumnProps}
                value={value}
                row={rowData}
                isEditable={isEditable}
                onChange={onChange}
            />
        );
    }
    if (isEditable) {
        return <EditableCell value={value} onChange={onChange} row={rowData} field={field} />;
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
    activateEditable: PropTypes.bool,
};

CellValue.defaultProps = {
    component: undefined,
    value: undefined,
    rowData: {},
    isEditable: false,
    onChange: () => {},
    field: undefined,
    activateEditable: undefined,
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
    field: undefined,
};
