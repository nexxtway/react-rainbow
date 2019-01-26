import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getColumns from './getColumns';
import getResizeGuideLineHeight from './getResizeGuideLineHeight';
import Body from './body';
import Head from './head';
import './styles.css';

/**
 * Data tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * @category DataView
 */
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: getColumns(props.children),
            tableWidth: undefined,
        };
        this.handleSort = this.handleSort.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.tableRef = React.createRef();
        this.resizeGuideLineHeight = getResizeGuideLineHeight(props.data.length);
    }

    componentDidUpdate({ children: prevChildren }) {
        const { children: currentChildren } = this.props;
        if (prevChildren !== currentChildren) {
            this.getUpdatedColumns();
        }
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-table-wrapper', className);
    }

    getUpdatedColumns() {
        const { children } = this.props;
        const newColumns = getColumns(children);
        this.setState({ columns: newColumns });
    }

    handleResize(plusWidth) {
        const { tableWidth } = this.state;
        if (tableWidth) {
            return this.setState({
                tableWidth: tableWidth + plusWidth,
            });
        }
        const { width: initialWidth } = this.tableRef.current.getBoundingClientRect();
        return this.setState({
            tableWidth: initialWidth + plusWidth,
        });
    }

    handleSort(event, columnIndex, sortDirection) {
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
        } = this.props;
        const { columns, tableWidth } = this.state;
        const tableStyles = {
            width: tableWidth,
        };

        return (
            <div className={this.getContainerClassNames()} style={style}>
                <table className="rainbow-table" style={tableStyles} ref={this.tableRef}>
                    <thead className="rainbow-table_head">
                        <tr className="rainbow-table_header-row">
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
                                resizeGuideLineHeight={this.resizeGuideLineHeight} />
                        </tr>
                    </thead>
                    <tbody className="rainbow-table_body">
                        <Body data={data} columns={columns} />
                    </tbody>
                </table>
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
};
