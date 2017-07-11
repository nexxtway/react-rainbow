let idCounter = 0;

export function uniqueId(prefix) { // eslint-disable-line
    idCounter += 1;
    return prefix ? `${prefix}-${idCounter}` : idCounter;
}
