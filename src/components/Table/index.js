import React, { Component } from 'react';
import PropTypes from 'prop-types';
import resolveColumns from './resolve-columns';
import Body from './body';
import Head from './head';
import './styles.css';

/** Data tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights. */
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { columns: resolveColumns(props.children), selectedColumn: undefined };
        this.onColumnSelect = this.onColumnSelect.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidUpdate({ children: prevChildren }) {
        const { children: currentChildren } = this.props;
        if (prevChildren !== currentChildren) {
            this.resolveColumnsFomChilren();
        }
    }

    onColumnSelect(e, columnIndex) {
        const { onSort } = this.props;
        onSort(e, this.state.columns[columnIndex].field);
        this.setState({ selectedColumn: columnIndex });
    }

    resolveColumnsFomChilren() {
        const { children } = this.props;
        const newColumns = resolveColumns(children);
        this.setState({ columns: newColumns });
    }

    resize(event, columnIndex, width) {
        const { columns } = this.state;
        const resizedColumn = Object.assign({}, columns[columnIndex]);
        resizedColumn.width = width;
        columns[columnIndex] = resizedColumn;
        this.setState({ columns });
    }

    render() {
        const { data, sortDirection, className, style } = this.props;
        const { columns, selectedColumn } = this.state;

        return (
            <div className={className} style={style}>
                <table className="rainbow-table">
                    <thead className="rainbow-table_head">
                        <tr className="rainbow-table_header-row" id="header-container">
                            <Head
                                columns={columns}
                                selectedColumn={selectedColumn}
                                onColumnSelect={this.onColumnSelect}
                                sortDirection={sortDirection}
                                onResize={this.resize} />
                        </tr>
                    </thead>
                </table>
                <div className="rainbow-table_body-wrapper">
                    <table className="rainbow-table">
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
    /** An array containing the objects(rows) to be displayed */
    data: PropTypes.arrayOf(Object).isRequired,
    /** Specifies the sorting direction, valid options are 'asc' or 'desc'. */
    sortDirection: PropTypes.oneOf(['asc', 'desc']),
    /** The action trigger when a sortable column header is clicked */
    onSort: PropTypes.func,
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
    className: undefined,
    style: undefined,
    children: undefined,
};
