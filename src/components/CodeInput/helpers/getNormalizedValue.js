export default function getNormalizedValue(inputValue, inputIndex, value, codeLength) {
    const valueArray = value.split('');
    for (let i = 0; i < codeLength; i += 1) {
        if (i === inputIndex) {
            valueArray[i] = inputValue;
        }
    }

    return valueArray.join('');
}
