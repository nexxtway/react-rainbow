let idCounter = 0;

export default function uniqueId(prefix) {
    // eslint-disable-line
    idCounter += 1;
    return prefix ? `${prefix}-${idCounter}` : String(idCounter);
}
