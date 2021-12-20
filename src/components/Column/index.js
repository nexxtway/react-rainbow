/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A column is a vertical element of a table that contains data.
 * The Column component is an abstraction that allows us to represent data of the same data type.
 * Both components (Table and Column) are related and should be implemented together.
 * @category DataView
 */

export default function Column() {
    return <div />;
}

Column.propTypes = {
    /**
     * The header of the column. It could be just a `String` with text or a component with a desired content.
     */
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * The alignment of the text of the column header
     */
    headerAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * The component class or function that is going to be use to render
     * the content of each cell on this column. By default the cell is
     * going to render the computed value(`data[rowIndex][field]`) for each cell.
     */
    component: PropTypes.func,
    /**
     * The field value is used to compute/map the value is going to be render
     * for each cell. It's the name of a property in the data objects.
     *
     * e.g `data = [{ name: 'Max', ... }, {...}]`;
     * field could be 'name' for a column that wants to represent names on a collection of people.
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
    /** Specifies the initial width of a column in pixels and allows the column to be resizable.
     * It must be within the minColumnWidth and maxColumnWidth values passed to Table.
     *
     * e.g  `defaultWidth={100}`
     */
    defaultWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The data type to be used for data formatting in cell. */
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(['text', 'action'])]),
    /** A boolean that specifies whether a column is editable or not. Its default value is false.  */
    isEditable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Determines the alignment of the text in each column cell.
     * Available options are: left, right, center.
     * This value defaults to `left` when the Table uses the `default` variant and defaults to `center` when uses the `listview` variant.
     */
    cellAlignment: PropTypes.oneOf(['left', 'right', 'center']),
};

Column.defaultProps = {
    header: undefined,
    headerAlignment: undefined,
    component: undefined,
    field: undefined,
    sortable: false,
    width: undefined,
    defaultWidth: undefined,
    type: 'text',
    isEditable: false,
    onChange: () => {},
    cellAlignment: undefined,
};
