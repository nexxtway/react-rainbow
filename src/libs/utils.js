let idCounter = 0;

// eslint-disable-next-line import/prefer-default-export
export function uniqueId(prefix) {
    // eslint-disable-line
    idCounter += 1;
    return prefix ? `${prefix}-${idCounter}` : String(idCounter);
}
