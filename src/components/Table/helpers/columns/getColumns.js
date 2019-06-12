import React from 'react';
import { SELECTABLE_CHECKBOX } from './';

function getDefaultWidth(defaultWidth, minColumnWidth, maxColumnWidth) {
    const minColWidth = Number(minColumnWidth);
    const maxColWidth = Number(maxColumnWidth);
    const defaultWidtNumber = Number(defaultWidth);

    if (minColWidth >= defaultWidtNumber) {
        return minColWidth;
    }
    if (maxColWidth <= defaultWidtNumber) {
        return maxColWidth;
    }
    return defaultWidtNumber || undefined;
}

export default function getColumns(params) {
    const { children = [], showCheckboxColumn, minColumnWidth, maxColumnWidth } = params;

    const columnsData = React.Children.map(
        children,
        column => {
            if (column && column.props) {
                const { type, width, defaultWidth } = column.props;
                const widthNumber = Number(width);
                if (type === 'action') {
                    return {
                        ...column.props,
                        width: widthNumber || 75,
                    };
                }
                return {
                    ...column.props,
                    width: widthNumber || undefined,
                    defaultWidth: getDefaultWidth(defaultWidth, minColumnWidth, maxColumnWidth),
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
