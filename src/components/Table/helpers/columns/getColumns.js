import React from 'react';
import { SELECTABLE_CHECKBOX, WITH_ENUMERABLE } from './';

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

function getEnumerableWidth(numberValue) {
    const enumerableColumnOffset = 40;
    const enumerableStringWidth = 8 * numberValue.toString().length;
    return enumerableStringWidth + enumerableColumnOffset;
}

export default function getColumns(params) {
    const {
        children = [],
        showCheckboxColumn,
        showRowNumberColumn,
        rowNumberOffset,
        minColumnWidth,
        maxColumnWidth,
    } = params;

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

    const extraColumns = {
        withCheckbox: undefined,
        withEnumerable: undefined,
    };

    if (showRowNumberColumn) {
        extraColumns.withEnumerable = {
            type: WITH_ENUMERABLE,
            rowNumberOffset,
            width: getEnumerableWidth(rowNumberOffset),
        };
    }

    if (showCheckboxColumn) {
        extraColumns.withCheckbox = {
            type: SELECTABLE_CHECKBOX,
            width: 52,
        };
    }

    const withEnumerableColumnOnly = showRowNumberColumn && !showCheckboxColumn;
    const withCheckboxColumnOnly = !showRowNumberColumn && showCheckboxColumn;
    const withEnumerableAndCheckboxColumns = showRowNumberColumn && showCheckboxColumn;

    if (withEnumerableColumnOnly) {
        return [extraColumns.withEnumerable, ...columnsData];
    } else if (withCheckboxColumnOnly) {
        return [extraColumns.withCheckbox, ...columnsData];
    } else if (withEnumerableAndCheckboxColumns) {
        return [extraColumns.withEnumerable, extraColumns.withCheckbox, ...columnsData];
    }

    return columnsData;
}
