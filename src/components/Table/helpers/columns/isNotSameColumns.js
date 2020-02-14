export default function isNotSameColumns(prevColumns, currentColumns) {
    if (prevColumns.length !== currentColumns.length) {
        return true;
    }
    return prevColumns.some((column, index) => {
        const {
            field,
            type,
            header,
            component,
            defaultWidth,
            width,
            sortable,
            children,
        } = currentColumns[index];
        return (
            column.field !== field ||
            column.type !== type ||
            column.header !== header ||
            column.defaultWidth !== defaultWidth ||
            column.component !== component ||
            column.sortable !== sortable ||
            column.width !== width ||
            column.children !== children
        );
    });
}
