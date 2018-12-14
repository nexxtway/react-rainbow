import React, { Component } from 'react';
import PropTypes from 'prop-types';
import resolveColumns from './resolve-columns';
import Rows from './body';
import Headers from './head';
import './styles.css';

/** Data tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights. */
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.columns = undefined;
    }

    componentDidMount() {
        if (!this.columns) {
            this.getColumns();
        }
    }

    getColumns() {
        const { children } = this.props;
        this.columns = resolveColumns(children);
        this.setState({ key: Date.now() });
    }

    render() {
        const { data, className, style } = this.props;
        return (
            <table className={className} style={style}>
                <thead className="rainbow-table_head">
                <tr className="rainbow-table_header-row">
                    <Headers columns={this.columns} />
                </tr>
                </thead>
                <tbody className="rainbow-table_body">
                <Rows data={data} columns={this.columns} />
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    /** An array containing the objects to be displayed */
    data: PropTypes.array.isRequired,
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
    className: undefined,
    style: undefined,
    children: undefined,
};
