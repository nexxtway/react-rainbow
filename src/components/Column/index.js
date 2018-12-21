/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Column() {
    return <div />;
}

Column.propTypes = {
    /* The header of the column */
    header: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    /** The component with wich to render the content of each cell */
    component: PropTypes.func,
    /** The field to display */
    field: PropTypes.string.isRequired,
};

Column.defaultProps = {
    header: undefined,
    component: undefined,
};
