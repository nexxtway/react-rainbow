/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Column() {
    return <div />;
}

Column.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    component: PropTypes.node.isRequired,
    field: PropTypes.string.isRequired,
    sortable: PropTypes.bool,
    onSort: PropTypes.func,
};

Column.defaultProps = {
    header: undefined,
    sortable: false,
    onSort: () => {},
};
