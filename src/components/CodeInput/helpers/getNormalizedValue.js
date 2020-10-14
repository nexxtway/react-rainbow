import isNumeric from './isNumeric';

export default function getNormalizedValue(inputValue, inputIndex, value) {
    if (isNumeric(inputValue) || inputValue === '') {
        const newValue = [...value];
        newValue[inputIndex] = inputValue;
        return newValue.join('').trim('');
    }
    return value.join('').trim();
}
