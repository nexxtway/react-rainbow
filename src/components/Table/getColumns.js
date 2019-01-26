import React from 'react';

export default function getColumns(columns) {
    return React.Children.map(columns, column => column.props, null);
}
