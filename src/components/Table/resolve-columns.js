import React from 'react';

export default function resolveColumns(columns) {
    return React.Children.map(columns, column => column.props, null);
}
