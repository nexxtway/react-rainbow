import getTotalWidthsMetadata from './getTotalWidthsMetadata';
import getExpectedTableWidth from './getExpectedTableWidth';
import getExpectedFlexibleColumnWidth from './getExpectedFlexibleColumnWidth';
import getColumnWidthFromDef from './getColumnWidthFromDef';

export default function getUpdatedColumns(params) {
    const { columns, domTableWidth, minColumnWidth, maxColumnWidth } = params;
    const widthsMeta = getTotalWidthsMetadata({
        columns,
        minColumnWidth,
        maxColumnWidth,
    });
    const expectedTableWidth = getExpectedTableWidth(domTableWidth, widthsMeta);
    const expectedFlexibleColumnWidth = getExpectedFlexibleColumnWidth(
        widthsMeta,
        expectedTableWidth,
    );

    return columns.map(column => ({
        ...column,
        computedWidth: getColumnWidthFromDef(column) || expectedFlexibleColumnWidth,
    }));
}
