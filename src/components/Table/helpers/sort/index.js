/* eslint-disable import/prefer-default-export */

export function getNextSortDirection(field, sortedBy, sortDirection = 'asc') {
    if (field && field === sortedBy) {
        if (sortDirection === 'asc') {
            return 'desc';
        }
        return 'asc';
    }
    return sortDirection;
}
