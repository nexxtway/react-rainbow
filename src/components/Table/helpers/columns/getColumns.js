import React from 'react';
import { SELECTABLE_CHECKBOX } from './';

export default function getColumns(columns = [], showCheckboxColumn) {
    const columnsData = React.Children.map(
        columns,
        column => {
            if (column && column.props) {
                const { type, width } = column.props;
                if (type === 'action') {
                    return {
                        ...column.props,
                        width: width || 50,
                    };
                }
                return column.props;
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
