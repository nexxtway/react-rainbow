function getDifference(a, b) {
    let i = 0;
    let j = 0;
    let result = '';

    while (j < b.length) {
        if (a[i] !== b[j] || i === a.length) {
            result += b[j];
        } else {
            i += 1;
        }
        j += 1;
    }
    return result;
}

export default function getSingleNewTypedValue(prevValue, value) {
    const hasValidPrevValue = prevValue && typeof prevValue === 'string';
    const hasValidValue = value && typeof value === 'string';

    if (!prevValue && hasValidValue) {
        return value;
    }
    if (hasValidPrevValue && hasValidValue) {
        return getDifference(prevValue, value) || null;
    }
    return null;
}
