import React from 'react';
import { SELECTABLE_CHECKBOX } from './';

export default function getColumns(columns, showCheckboxColumn) {
    const columnsData = React.Children.map(columns, (column) => {
        if (column) {
            return column.props;
        }
        return null;
    }, null);

    if (showCheckboxColumn) {
        return [
            {
                type: SELECTABLE_CHECKBOX,
                width: 52,
            },
            ...columnsData,
        ];
    }
    return columnsData;
}
