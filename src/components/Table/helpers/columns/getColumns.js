import React from 'react';

export default function getColumns(columns) {
    return React.Children.map(columns, (column) => {
        if (column) {
            return column.props;
        }
        return null;
    }, null);
}
