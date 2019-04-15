import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Body from './body';
import Head from './head';
import getNextSortDirection from './getNextSortDirection';
import { getColumns, isNotSameColumns } from './helpers/columns';
import { getUpdatedColumns, getResizedColumns } from './helpers/resizer';
import { getRows, getIndexes } from './helpers/rows';
import {
    getUpdatedRowsWhenSelect,
    getUpdatedRowsWhenDeselect,
    getUpdatedRowsWhenSelectAll,
    getUpdatedRowsWhenDeselectAll,
    getBulkSelectionState,
    getRowsWithInitalSelectedRows,
} from './helpers/selector';
import ResizeSensor from '../../libs/ResizeSensor';
import debounce from '../../libs/debounce';
import { uniqueId } from '../../libs/utils';
import './styles.css';

/**
 * Data tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * @category DataView
 */
export default class Table extends Component {
    constructor(props) {
        super(props);
        const {
            children,
            hideCheckboxColumn,
            keyField,
            data,
            maxRowSelection,
        } = props;

        this.state = {
            columns: getColumns(children, hideCheckboxColumn),
            tableWidth: undefined,
            rows: getRows({
                keyField,
                rows: data,
                maxRowSelection,
                selectedRowsKeys: {},
            }),
            bulkSelection: 'none',
        };

        this.indexes = getIndexes(this.state.rows);
        this.selectedRowsKeys = {};

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
            hideCheckboxColumn: prevHideCheckboxColumn,
            maxRowSelection: prevMaxRowSelection,
            selectedRows: prevSelectedRows,
        } = prevProps;
        const {
            children,
            hideCheckboxColumn,
            maxRowSelection,
            selectedRows,
        } = this.props;
        const prevColumns = getColumns(prevChildren, prevHideCheckboxColumn);
        const currentColumns = getColumns(children, hideCheckboxColumn);
        if (isNotSameColumns(prevColumns, currentColumns)) {
            this.updateColumnsAndTableWidth(currentColumns);
        }
        if (prevMaxRowSelection !== maxRowSelection || prevSelectedRows !== selectedRows) {
            this.updateRows();
        }
    }

    componentWillUnmount() {
        this.widthObserver.detach();
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-table_container', className);
    }

    getTableWidthFromDom() {
        const containerElement = this.tableContainerRef.current;
        if (containerElement) {
            return containerElement.offsetWidth;
        }
        return 0;
    }

    getSelectedRows() {
        const { data, keyField } = this.props;
        return data.filter(item => this.selectedRowsKeys[item[keyField]]);
    }

    getMaxRowSelection() {
        const { maxRowSelection } = this.props;
        const { rows } = this.state;
        const rowsLength = rows.length;
        if (maxRowSelection === undefined || maxRowSelection > rowsLength) {
            return rowsLength;
        }
        return maxRowSelection;
    }

    updateRows() {
        const {
            keyField,
            data,
            selectedRows,
        } = this.props;
        const maxRowSelection = this.getMaxRowSelection();
        this.selectedRowsKeys = {};
        const rows = getRows({
            keyField,
            rows: data,
            maxRowSelection,
            selectedRowsKeys: this.selectedRowsKeys,
        });

        this.setState({
            rows: getRowsWithInitalSelectedRows({
                rows,
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
        this.setState({
            columns: getUpdatedColumns({
                columns: newColumns || columns,
                domTableWidth,
                minColumnWidth,
                maxColumnWidth,
            }),
        });
        if (this.hasFlexibleColumns()) {
            this.setState({
                tableWidth: domTableWidth,
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
        onRowSelection(this.getSelectedRows());
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
        onRowSelection(this.getSelectedRows());
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
        }

        this.lastSelectedRowKey = rowKeyValue;
        onRowSelection(this.getSelectedRows());
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
        onRowSelection(this.getSelectedRows());
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
            keyField,
            data,
            sortedBy,
            sortDirection,
            defaultSortDirection,
            resizeColumnDisabled,
            minColumnWidth,
            maxColumnWidth,
            style,
        } = this.props;
        const {
            columns,
            tableWidth,
            rows,
            bulkSelection,
        } = this.state;
        const tableStyles = {
            width: tableWidth,
        };
        const maxRowSelection = this.getMaxRowSelection();

        if (keyField) {
            return (
                <div className={this.getContainerClassNames()} style={style}>
                    <div className="rainbow-table-width-observer" ref={this.resizeTarget} />
                    <div className="rainbow-table_container">
                        <div className="rainbow-table_container--scrollable-x" ref={this.tableContainerRef}>
                            <div className="rainbow-table_container--scrollable-y" style={tableStyles}>
                                <table className="rainbow-table" style={tableStyles}>
                                    <thead>
                                        <tr>
                                            <Head
                                                columns={columns}
                                                selectedColumn={sortedBy}
                                                sortDirection={sortDirection}
                                                defaultSortDirection={defaultSortDirection}
                                                resizeColumnDisabled={resizeColumnDisabled}
                                                minColumnWidth={minColumnWidth}
                                                maxColumnWidth={maxColumnWidth}
                                                onSort={this.handleSort}
                                                onResize={this.handleResize}
                                                onSelectAllRows={this.handleSelectAllRows}
                                                onDeselectAllRows={this.handleDeselectAllRows}
                                                tableId={this.tableId}
                                                maxRowSelection={maxRowSelection}
                                                bulkSelection={bulkSelection} />
                                        </tr>
                                    </thead>
                                    <tbody className="rainbow-table_body">
                                        <Body
                                            data={data}
                                            columns={columns}
                                            rows={rows}
                                            tableId={this.tableId}
                                            onSelectRow={this.handleSelectRow}
                                            onDeselectRow={this.handleDeselectRow} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

Table.propTypes = {
    /** An array containing the objects(rows) to be displayed. */
    data: PropTypes.arrayOf(Object).isRequired,
    /** The column fieldName that controls the sorting order.
     * Sort the data using the onsort event handler. */
    sortedBy: PropTypes.string,
    /**
     * Specifies the sorting direction, valid options are 'asc' or 'desc'.
     */
    sortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** Specifies the default sorting direction on an unsorted column.
     * Valid options include 'asc' and 'desc'.
     * The default is 'asc' for sorting in ascending order. */
    defaultSortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** Action triggered when a column is sorted.
     * Receive the event object, field and sortDirection. */
    onSort: PropTypes.func,
    /** Specifies whether column resizing is disabled. The default is false. */
    resizeColumnDisabled: PropTypes.bool,
    /** The minimum width for all columns. The default is 50px. */
    minColumnWidth: PropTypes.number,
    /** The maximum width for all columns. The default is 1000px. */
    maxColumnWidth: PropTypes.number,
    /** Show or hide the checkbox column for row selection. To hide set
     * hideCheckboxColumn to true. The default value is false. */
    hideCheckboxColumn: PropTypes.bool,
    /** The action triggered when a row is selected. Receive the selectedRows array. */
    onRowSelection: PropTypes.func,
    /** The maximum number of rows that can be selected. When the value is
     * 1 the selection is made by radio buttons, otherwise with checkboxes. */
    maxRowSelection: PropTypes.number,
    /** An array with a list of keyField values of the selected rows. */
    selectedRows: PropTypes.array,
    /** It is required for associate each row with a unique ID. Must be one of the data key. */
    keyField: PropTypes.string.isRequired,
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
    sortedBy: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    onSort: () => {},
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    hideCheckboxColumn: false,
    onRowSelection: () => {},
    maxRowSelection: undefined,
    selectedRows: undefined,
    className: undefined,
    style: undefined,
    children: undefined,
};
