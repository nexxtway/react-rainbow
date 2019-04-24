/* eslint-disable import/prefer-default-export */

export function normalizeData(data) {
    if (Array.isArray(data)) {
        return data;
    }
    return [];
}
