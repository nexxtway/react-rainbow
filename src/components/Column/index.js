/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @category DataView
 */
export default function Column() {
    return <div />;
}

Column.propTypes = {
    /**
     * The header of the column. it could just an String with text is going
     * to be rendered or component with a desired content.
     */
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * The component class or function that is going to be use to render
     * the content of each cell on this column. By default the cell is
     * going to render the computed value(`data[rowIndex][field]`) for each cell.
     */
    component: PropTypes.func,
    /**
     * The field value is used to compute/map the value is going to be render
     * for each cell. it's the name of a property in the data objects.
     *
     * e.g `data = [{ name: 'Max', ... }, {...}]`;
     * field could be 'name' for a column that want to represent names on a collection of people.
     */
    field: PropTypes.string,
    /**
     * Sets whether the column should control the sorting order of the data.
     * @ignore
     */
    sortable: PropTypes.bool,
    /** Specifies the width of a column in pixels and make the column non-resizable.
     *
     * e.g  `width={100}` */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Specifies the inital width of a column in pixels and allows the column to be resizable.
     * It must be within the minColumnWidth and maxColumnWidth values passed to Table.
     *
     * e.g  `defaultWidth={100}`
     */
    defaultWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The data type to be used for data formatting in cell. */
    type: PropTypes.oneOf(['text', 'action']),
};

Column.defaultProps = {
    header: undefined,
    component: undefined,
    field: undefined,
    sortable: false,
    width: undefined,
    defaultWidth: undefined,
    type: 'text',
};
