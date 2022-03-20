/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Body from './body';
import Head from './head';
import { getNextSortDirection } from './helpers/sort';
import { getColumns, isNotSameColumns } from './helpers/columns';
import { getUpdatedColumns, getResizedColumns, getTableWidth } from './helpers/resizer';
import { getRows, getIndexes } from './helpers/rows';
import {
    getUpdatedRowsWhenSelect,
    getUpdatedRowsWhenDeselect,
    getUpdatedRowsWhenSelectAll,
    getUpdatedRowsWhenDeselectAll,
    getBulkSelectionState,
    getRowsWithInitalSelectedRows,
    isValidMaxRowSelection,
    getSelectedRowKeys,
    getSelectedRowKeysFromSelectedRows,
} from './helpers/selector';
import { normalizeData } from './helpers/data';
import ResizeSensor from '../../libs/ResizeSensor';
import debounce from '../../libs/debounce';
import { uniqueId } from '../../libs/utils';
import EmptyIcon from './body/icons/empty';
import StyledContainer from './styled/container';
import StyledScrollableX from './styled/scrollableX';
import StyledScrollableY from './styled/scrollableY';
import StyledTable from './styled/table';
import StyledTableBody from './styled/tableBody';
import StyledThead from './styled/thead';

/**
 * A table lists a collection of data that makes sense when displays them in rows and columns.
 * The data contained in a table is easier to read due to the format, so it can be useful to sort,
 * search, and filter your data.
 * @category DataView
 */
export default class Table extends Component {
    constructor(props) {
        super(props);
        const {
            children,
            showCheckboxColumn,
            keyField,
            data,
            showRowNumberColumn,
            rowNumberOffset,
            maxRowSelection,
            minColumnWidth,
            maxColumnWidth,
            selectedRows,
            variant,
        } = props;

        this.state = {
            columns: getColumns({
                children,
                showCheckboxColumn,
                showRowNumberColumn,
                rowNumberOffset,
                minColumnWidth,
                maxColumnWidth,
                variant,
            }),
            tableWidth: undefined,
            rows: getRows({
                keyField,
                rows: normalizeData(data),
                maxRowSelection: maxRowSelection && Number(maxRowSelection),
                selectedRowsKeys: {},
            }),
            bulkSelection: 'none',
        };
        const { rows } = this.state;
        this.indexes = getIndexes(rows);
        this.selectedRowsKeys = getSelectedRowKeysFromSelectedRows(selectedRows, this.indexes);

        this.tableId = uniqueId('table');
        this.tableContainerRef = React.createRef();
        this.resizeTarget = React.createRef();
        this.handleSort = this.handleSort.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.updateColumnsAndTableWidth = this.updateColumnsAndTableWidth.bind(this);
        this.handleSelectRow = this.handleSelectRow.bind(this);
        this.handleDeselectRow = this.handleDeselectRow.bind(this);
        this.handleSelectAllRows = this.handleSelectAllRows.bind(this);
        this.handleDeselectAllRows = this.handleDeselectAllRows.bind(this);

        this.scrollableY = React.createRef();
    }

    componentDidMount() {
        this.widthObserver = new ResizeSensor(
            this.resizeTarget.current,
            debounce(this.updateColumnsAndTableWidth, 200),
        );
        this.updateRows();
        this.updateColumnsAndTableWidth();
    }

    componentDidUpdate(prevProps) {
        const {
            children: prevChildren,
            showCheckboxColumn: prevShowCheckboxColumn,
            maxRowSelection: prevMaxRowSelection,
            selectedRows: prevSelectedRows,
            data: prevData,
            minColumnWidth: prevMinColumnWidth,
            maxColumnWidth: prevMaxColumnWidth,
        } = prevProps;
        const {
            children,
            showCheckboxColumn,
            showRowNumberColumn,
            rowNumberOffset,
            maxRowSelection,
            selectedRows,
            data,
            keyField,
            minColumnWidth,
            maxColumnWidth,
            onRowSelection,
            variant,
        } = this.props;
        const prevColumns = getColumns({
            children: prevChildren,
            showCheckboxColumn: prevShowCheckboxColumn,
            showRowNumberColumn,
            rowNumberOffset,
            minColumnWidth: prevMinColumnWidth,
            maxColumnWidth: prevMaxColumnWidth,
            variant,
        });
        const currentColumns = getColumns({
            children,
            showCheckboxColumn,
            showRowNumberColumn,
            rowNumberOffset,
            minColumnWidth,
            maxColumnWidth,
            variant,
        });
        const isNotSameMaxRowSelection = prevMaxRowSelection !== maxRowSelection;
        const isNotSameData = data !== prevData;
        if (isNotSameMaxRowSelection || isNotSameData) {
            this.updateRows();
        }
        if (isNotSameColumns(prevColumns, currentColumns)) {
            this.updateColumnsAndTableWidth(currentColumns);
        }
        const isNotSameSelectedRows = prevSelectedRows !== selectedRows;
        if (isNotSameSelectedRows) {
            const selectedRowsKeysLength = Object.keys(this.selectedRowsKeys).length;
            if (selectedRowsKeysLength !== selectedRows.length) {
                this.selectedRowsKeys = getSelectedRowKeysFromSelectedRows(
                    selectedRows,
                    this.indexes,
                );
                const updatedRows = getRows({
                    keyField,
                    rows: normalizeData(data),
                    maxRowSelection,
                    selectedRowsKeys: this.selectedRowsKeys,
                });
                onRowSelection(this.getSelectedRows(updatedRows));
                this.updateRows();
            }
        }
    }

    componentWillUnmount() {
        this.widthObserver.detach();
    }

    getTableWidthFromDom() {
        const containerElement = this.tableContainerRef.current;
        if (containerElement) {
            return containerElement.offsetWidth;
        }
        return 0;
    }

    getSelectedRows(rows) {
        const { data } = this.props;
        return normalizeData(data).filter((item, index) => rows[index].isSelected);
    }

    getMaxRowSelection() {
        const { maxRowSelection, data } = this.props;
        const rowsLength = normalizeData(data).length;
        const maxRowSelectionNumber = Number(maxRowSelection);

        if (!isValidMaxRowSelection(maxRowSelection, rowsLength)) {
            return rowsLength;
        }
        return maxRowSelectionNumber;
    }

    /**
     * It will scroll to the top of the Y scrollable container.
     * @public
     */
    scrollTop() {
        this.scrollableY.current.scrollTop = 0;
    }

    updateRows() {
        const { keyField, selectedRows, onRowSelection, data } = this.props;
        const maxRowSelection = this.getMaxRowSelection();
        const newRows = getRows({
            keyField,
            rows: normalizeData(data),
            maxRowSelection,
            selectedRowsKeys: this.selectedRowsKeys,
        });
        this.indexes = getIndexes(newRows);
        const selectedRowsKeysLength = Object.keys(this.selectedRowsKeys).length;
        const currentSelectedRows = this.getSelectedRows(newRows);
        const isNotSameSelectedRowsWithNewData =
            selectedRowsKeysLength !== currentSelectedRows.length;

        if (isNotSameSelectedRowsWithNewData) {
            onRowSelection(currentSelectedRows);
            this.selectedRowsKeys = getSelectedRowKeys(currentSelectedRows, keyField);
        }

        this.setState({
            rows: getRowsWithInitalSelectedRows({
                rows: newRows,
                selectedRows,
                maxRowSelection,
                indexes: this.indexes,
                selectedRowsKeys: this.selectedRowsKeys,
            }),
            bulkSelection: getBulkSelectionState({
                maxRowSelection,
                selectedRowsKeys: this.selectedRowsKeys,
            }),
        });
    }

    updateColumnsAndTableWidth(newColumns) {
        const { columns } = this.state;
        const { minColumnWidth, maxColumnWidth } = this.props;
        const domTableWidth = this.getTableWidthFromDom();
        const minColWidth = Number(minColumnWidth) || 50;
        const maxColWidth = Number(maxColumnWidth) || Infinity;
        const updatedColumns = getUpdatedColumns({
            columns: newColumns || columns,
            domTableWidth,
            minColumnWidth: minColWidth,
            maxColumnWidth: maxColWidth,
        });
        this.setState({
            columns: updatedColumns,
        });
        if (this.hasFlexibleColumns()) {
            this.setState({
                tableWidth: getTableWidth(updatedColumns),
            });
        }
    }

    handleSelectAllRows() {
        const { onRowSelection } = this.props;
        const { rows } = this.state;
        const maxRowSelection = this.getMaxRowSelection();

        this.selectedRowsKeys = {};
        const updatedRows = getUpdatedRowsWhenSelectAll({
            rows,
            maxRowSelection,
            selectedRowsKeys: this.selectedRowsKeys,
        });
        const bulkSelection = getBulkSelectionState({
            maxRowSelection,
            selectedRowsKeys: this.selectedRowsKeys,
        });
        this.setState({
            rows: updatedRows,
            bulkSelection,
        });
        onRowSelection(this.getSelectedRows(updatedRows));
    }

    handleDeselectAllRows() {
        const { onRowSelection } = this.props;
        const { rows } = this.state;

        this.selectedRowsKeys = {};
        const updatedRows = getUpdatedRowsWhenDeselectAll(rows);
        const bulkSelection = getBulkSelectionState({
            maxRowSelection: this.getMaxRowSelection(),
            selectedRowsKeys: this.selectedRowsKeys,
        });
        this.setState({
            rows: updatedRows,
            bulkSelection,
        });
        onRowSelection(this.getSelectedRows(updatedRows));
    }

    handleSelectRow(event, isMultiple, rowKeyValue) {
        const { onRowSelection } = this.props;
        const { indexes } = this;
        const { rows } = this.state;
        const maxRowSelection = this.getMaxRowSelection();

        if (maxRowSelection > 1) {
            const updatedRows = getUpdatedRowsWhenSelect({
                maxRowSelection,
                rows,
                indexes,
                isMultiple,
                rowKeyValue,
                lastSelectedRowKey: this.lastSelectedRowKey,
                selectedRowsKeys: this.selectedRowsKeys,
            });
            const bulkSelection = getBulkSelectionState({
                maxRowSelection,
                selectedRowsKeys: this.selectedRowsKeys,
            });
            this.setState({
                rows: updatedRows,
                bulkSelection,
            });
            onRowSelection(this.getSelectedRows(updatedRows));
        } else {
            this.selectedRowsKeys = {};
            this.selectedRowsKeys[rowKeyValue] = true;
            const updatedRows = getUpdatedRowsWhenSelect({
                maxRowSelection,
                rows,
                rowKeyValue,
                selectedRowsKeys: this.selectedRowsKeys,
            });
            this.setState({
                rows: updatedRows,
            });
            onRowSelection(this.getSelectedRows(updatedRows));
        }

        this.lastSelectedRowKey = rowKeyValue;
    }

    handleDeselectRow(event, isMultiple, rowKeyValue) {
        const { onRowSelection } = this.props;
        const { indexes } = this;
        const { rows } = this.state;
        const maxRowSelection = this.getMaxRowSelection();

        const updatedRows = getUpdatedRowsWhenDeselect({
            maxRowSelection,
            rows,
            indexes,
            isMultiple,
            rowKeyValue,
            lastSelectedRowKey: this.lastSelectedRowKey,
            selectedRowsKeys: this.selectedRowsKeys,
        });
        const bulkSelection = getBulkSelectionState({
            maxRowSelection,
            selectedRowsKeys: this.selectedRowsKeys,
        });
        this.setState({
            rows: updatedRows,
            bulkSelection,
        });
        this.lastSelectedRowKey = rowKeyValue;
        onRowSelection(this.getSelectedRows(updatedRows));
    }

    hasFlexibleColumns() {
        const { columns } = this.state;
        return columns.some(column => column.isResized !== true);
    }

    handleResize(widthDelta, colIndex) {
        const { columns, tableWidth } = this.state;
        if (widthDelta !== 0) {
            this.setState({
                columns: getResizedColumns({ columns, colIndex, widthDelta }),
                tableWidth: tableWidth + widthDelta,
            });
        }
    }

    handleSort(event, field, sortDirection) {
        const { onSort, sortedBy } = this.props;
        const nextSortDirection = getNextSortDirection(field, sortedBy, sortDirection);
        onSort(event, field, nextSortDirection);
    }

    render() {
        const {
            id,
            data,
            sortedBy,
            sortDirection,
            defaultSortDirection,
            resizeColumnDisabled,
            rowNumberOffset,
            minColumnWidth,
            maxColumnWidth,
            style,
            className,
            isLoading,
            emptyIcon,
            emptyTitle,
            emptyDescription,
            keyField,
            hideTableHeader,
            variant,
        } = this.props;
        const { columns, tableWidth, rows, bulkSelection } = this.state;
        const tableStyles = {
            width: tableWidth,
        };
        const maxRowSelection = this.getMaxRowSelection();
        const minColWidth = Number(minColumnWidth) || 50;
        const maxColWidth = Number(maxColumnWidth) || 5000;

        const isEmpty = data.length === 0;
        const theme = { variant, hideTableHeader, isEmpty };

        if (keyField && typeof keyField === 'string') {
            return (
                <StyledContainer id={id} className={className} style={style}>
                    <div ref={this.resizeTarget} />
                    <ThemeProvider theme={theme}>
                        <StyledContainer>
                            <StyledScrollableX ref={this.tableContainerRef}>
                                <StyledScrollableY
                                    isEmpty={isEmpty}
                                    isLoading={isLoading}
                                    ref={this.scrollableY}
                                    style={tableStyles}
                                >
                                    <StyledTable style={tableStyles}>
                                        <StyledThead>
                                            <tr>
                                                <Head
                                                    columns={columns}
                                                    sortedBy={sortedBy}
                                                    sortDirection={sortDirection}
                                                    defaultSortDirection={defaultSortDirection}
                                                    resizeColumnDisabled={resizeColumnDisabled}
                                                    minColumnWidth={minColWidth}
                                                    maxColumnWidth={maxColWidth}
                                                    onSort={this.handleSort}
                                                    onResize={this.handleResize}
                                                    onSelectAllRows={this.handleSelectAllRows}
                                                    onDeselectAllRows={this.handleDeselectAllRows}
                                                    tableId={this.tableId}
                                                    maxRowSelection={maxRowSelection}
                                                    bulkSelection={bulkSelection}
                                                />
                                            </tr>
                                        </StyledThead>
                                        <StyledTableBody rowNumberOffset={rowNumberOffset}>
                                            <Body
                                                data={normalizeData(data)}
                                                columns={columns}
                                                rows={rows}
                                                tableId={this.tableId}
                                                isLoading={isLoading}
                                                emptyIcon={emptyIcon}
                                                emptyTitle={emptyTitle}
                                                emptyDescription={emptyDescription}
                                                onSelectRow={this.handleSelectRow}
                                                onDeselectRow={this.handleDeselectRow}
                                            />
                                        </StyledTableBody>
                                    </StyledTable>
                                </StyledScrollableY>
                            </StyledScrollableX>
                        </StyledContainer>
                    </ThemeProvider>
                </StyledContainer>
            );
        }
        console.error('The "keyField" is a required prop of the Table component.');
        return null;
    }
}

Table.propTypes = {
    /** An array containing the objects(rows) to be displayed. */
    data: PropTypes.arrayOf(Object),
    /** The column fieldName that controls the sorting order.
     * Sorts the data using the onsort event handler. */
    sortedBy: PropTypes.string,
    /**
     * Specifies the sorting direction. Valid options are 'asc' or 'desc'.
     */
    sortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** Specifies the default sorting direction on an unsorted column.
     * Valid options include 'asc' and 'desc'.
     * The default is 'asc' for sorting in ascending order. */
    defaultSortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** Action triggered when a column is sorted.
     * Receives the event object, field and sortDirection. */
    onSort: PropTypes.func,
    /** Specifies whether column resizing is disabled. The default is false. */
    resizeColumnDisabled: PropTypes.bool,
    /** The minimum width for all columns. The default value is 50px. */
    minColumnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The maximum width for all columns. The default value is Infinity. */
    maxColumnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Shows or hide the checkbox column for row selection. To show set
     * showCheckboxColumn to true. The default value is false. */
    showCheckboxColumn: PropTypes.bool,
    /** Shows or hides the row number column. Set to true to show the row number column. The default is false. */
    showRowNumberColumn: PropTypes.bool,
    /** Determines where to start counting the row number. The default is 0. */
    rowNumberOffset: PropTypes.number,
    /** The action triggered when a row is selected. Receives the selectedRows array. */
    onRowSelection: PropTypes.func,
    /** The maximum number of rows that can be selected. When the value is
     * 1 the selection is made by radio buttons, otherwise with checkboxes. */
    maxRowSelection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** An array with a list of keyField values of the selected rows. */
    selectedRows: PropTypes.array,
    /** It is required to associate each row with a unique ID. Must be one of the data key.
     * If it is not passed the component will not render.
     */
    keyField: PropTypes.string.isRequired,
    /** Specifies whether data is being loaded. The default is false. */
    isLoading: PropTypes.bool,
    /** The icon that appears in the message of the Table when is empty.
     * If not passed a fallback icon will be shown. */
    emptyIcon: PropTypes.node,
    /** The title that appears in the message of the Table when is empty.
     *  If not passed a fallback title will be shown.
     */
    emptyTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description that appears in the message of the Table when is empty.
     *  If not passed a fallback description will be shown.
     */
    emptyDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The variant changes the appearance of the button. Accepted variants include default and listview. */
    variant: PropTypes.oneOf(['default', 'listview']),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Shows or hides the header column. The default is false */
    hideTableHeader: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

Table.defaultProps = {
    data: [],
    sortedBy: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    onSort: () => {},
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: Infinity,
    showCheckboxColumn: false,
    showRowNumberColumn: false,
    rowNumberOffset: 0,
    onRowSelection: () => {},
    maxRowSelection: undefined,
    selectedRows: [],
    isLoading: false,
    emptyIcon: <EmptyIcon />,
    emptyTitle: 'It’s empty here',
    emptyDescription: 'Our robots did not find any match...',
    variant: 'default',
    id: undefined,
    hideTableHeader: false,
    className: undefined,
    style: undefined,
    children: undefined,
};
