import React from 'react';
import { SELECTABLE_CHECKBOX } from './';

export default function getColumns(columns = [], showCheckboxColumn, minColumnWidth) {
    const columnsData = React.Children.map(
        columns,
        column => {
            if (column && column.props) {
                const { type, width, defaultWidth } = column.props;
                if (type === 'action') {
                    return {
                        ...column.props,
                        width: Number(width) || 50,
                    };
                }
                return {
                    ...column.props,
                    width: Number(width) || undefined,
                    defaultWidth: Math.max(defaultWidth, Number(minColumnWidth)) || undefined,
                };
            }
            return null;
        },
        null,
    );

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
