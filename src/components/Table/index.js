import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import resolveColumns from './resolve-columns';
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
        this.handleColumnSelect = this.handleColumnSelect.bind(this);
        this.onColumnResize = this.onColumnResize.bind(this);
        this.state = {
            columns: resolveColumns(props.children),
            selectedColumn: undefined,
            tableWidth: undefined,
        };
        this.columnsWidths = this.state.columns.map((col) => {
            if (col.width) {
                return col.width;
            }
            return col.defaultWidth;
        });
    }

    componentDidMount() {
        this.initialWidthRenderCompleted();
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

    initialWidthRenderCompleted() {
        const { tableWidth } = this.state;
        if (tableWidth === undefined) {
            this.setTableWidth();
        }
    }

    resolveColumnsFomChilren() {
        const { children } = this.props;
        const newColumns = resolveColumns(children);
        this.setState({ columns: newColumns });
    }

    handleColumnSelect(event, columnIndex) {
        const { onSort } = this.props;
        const { columns } = this.state;
        const { field } = columns[columnIndex];
        onSort(event, field);
        this.setState({ selectedColumn: columnIndex });
    }

    render() {
        const {
            data,
            sortDirection,
            resizeColumnDisabled,
            minColumnWidth,
            maxColumnWidth,
            style,
        } = this.props;
        const { columns, selectedColumn, tableWidth } = this.state;
        const tableStyles = { width: tableWidth };
        const resizeGuideLineHeight = (data.length * 40) + 44;

        return (
            <div className={this.getContainerClassNames()} style={style}>
                <table className="rainbow-table" style={tableStyles}>
                    <thead className="rainbow-table_head">
                        <tr className="rainbow-table_header-row">
                            <Head
                                columns={columns}
                                columnsWidths={this.columnsWidths}
                                selectedColumn={selectedColumn}
                                sortDirection={sortDirection}
                                resizeColumnDisabled={resizeColumnDisabled}
                                minColumnWidth={minColumnWidth}
                                maxColumnWidth={maxColumnWidth}
                                onColumnSelect={this.handleColumnSelect}
                                onResize={this.onColumnResize}
                                resizeGuideLineHeight={resizeGuideLineHeight} />
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
    /**
     * Specifies the sorting direction, valid options are 'asc' or 'desc'.
     */
    sortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** Action triggered when a column header is clicked */
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
    sortDirection: 'asc',
    onSort: () => {},
    resizeColumnDisabled: false,
    minColumnWidth: 50,
    maxColumnWidth: 1000,
    className: undefined,
    style: undefined,
    children: undefined,
};
