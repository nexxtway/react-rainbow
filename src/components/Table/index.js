import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import resolveColumns from './resolve-columns';
import Body from './body';
import Head from './head';
import './styles.css';
import { uniqueId } from '../../libs/utils';

/**
 * Data tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * @category DataView
 */
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.handleColumnSelect = this.handleColumnSelect.bind(this);
        this.onColumnResize = this.onColumnResize.bind(this);
        this.state = {
            columns: resolveColumns(props.children),
            tableWidth: undefined,
        };
        this.columnsWidths = this.state.columns.map((col) => {
            if (col.width) {
                return col.width;
            }
            return col.defaultWidth;
        });
        this.tableId = uniqueId('table');
    }

    componentDidMount() {
        this.initialRenderCompleted();
    }

    componentDidUpdate({ children: prevChildren }) {
        const { children: currentChildren } = this.props;
        if (prevChildren !== currentChildren) {
            this.resolveColumnsFomChilren();
        }
    }

    onColumnResize(columnIndex, newWidth) {
        this.columnsWidths = this.columnsWidths.map((width, index) => {
            if (index === columnIndex) {
                return newWidth;
            }
            return width;
        });
        this.setTableWidth();
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-table-wrapper', className);
    }

    setTableWidth() {
        const width = this.columnsWidths.reduce((prev, actual) => {
            if (actual) {
                return prev + actual;
            }
            return prev;
        }, 0);
        this.setState({ tableWidth: width });
    }

    initialRenderCompleted() {
        const { tableWidth } = this.state;
        if (tableWidth === undefined) {
            const fakeHeaders = document.querySelectorAll(`th[data-id="${this.tableId}-fake-header"]`);
            fakeHeaders.forEach((header, index) => {
                this.columnsWidths[index] = header.getBoundingClientRect().width;
            });
            this.setTableWidth();
        }
    }

    resolveColumnsFomChilren() {
        const { children } = this.props;
        const newColumns = resolveColumns(children);
        this.setState({ columns: newColumns });
    }

    handleColumnSelect(event, columnIndex, sortDirection) {
        const { onSort, sortedBy } = this.props;
        const { columns } = this.state;
        const { field } = columns[columnIndex];
        let nextSortDirection;
        if (field === sortedBy) {
            if (sortDirection === 'asc') {
                nextSortDirection = 'desc';
            } else {
                nextSortDirection = 'asc';
            }
        } else {
            nextSortDirection = sortDirection;
        }
        onSort(event, field, nextSortDirection);
    }

    render() {
        const {
            data,
            sortedBy,
            sortDirection,
            defaultSortDirection,
            resizeColumnDisabled,
            minColumnWidth,
            maxColumnWidth,
            style,
            id,
        } = this.props;
        const { columns, tableWidth } = this.state;
        const tableStyles = { width: tableWidth };
        const resizeGuideLineHeight = (data.length * 40) + 44;
        const fakeHeaders = this.columnsWidths.map((colWidth, index) => {
            const headerStyle = { width: colWidth };
            const headerId = `${this.tableId}-fake-header`;
            const key = `${id}-${index}`;
            return <th style={headerStyle} key={key} data-id={headerId} />;
        });

        return (
            <div className={this.getContainerClassNames()} style={style} id={id}>
                <div className="rainbow-table_fixed-header" style={tableStyles}>
                    <Head
                        columns={columns}
                        columnsWidths={this.columnsWidths}
                        selectedColumn={sortedBy}
                        sortDirection={sortDirection}
                        defaultSortDirection={defaultSortDirection}
                        resizeColumnDisabled={resizeColumnDisabled}
                        minColumnWidth={minColumnWidth}
                        maxColumnWidth={maxColumnWidth}
                        onColumnSelect={this.handleColumnSelect}
                        onResize={this.onColumnResize}
                        resizeGuideLineHeight={resizeGuideLineHeight} />
                </div>
                <div className="rainbow-table-container" style={tableStyles}>
                    <table className="rainbow-table" style={tableStyles}>
                        <thead className="rainbow-table_head">
                            <tr className="rainbow-table_header-row">
                                {fakeHeaders}
                            </tr>
                        </thead>
                        <tbody className="rainbow-table_body">
                            <Body data={data} columns={columns} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
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
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** The id of the outer element. */
    id: PropTypes.string,
};

Table.defaultProps = {
    sortedBy: undefined,
    sortDirection: undefined,
    defaultSortDirection: 'asc',
    onSort: () => {},
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    className: undefined,
    style: undefined,
    children: undefined,
    id: undefined,
};
