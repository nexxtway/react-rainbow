import isNumeric from './isNumeric';
import getInputPlaceholder from './getInputPlaceholder';

export default function getNormalizedValue(inputValue, index, value, length, onChangeCallback) {
    const hasValue = value && value.length;
    const valueArray = hasValue ? value.split('') : [''];
    const inputPlaceholder = getInputPlaceholder();

    if (inputValue !== '' && isNumeric(inputValue)) {
        valueArray[index] = inputValue;
    } else if (inputValue === '') {
        if (valueArray[index + 1]) {
            valueArray[index] = inputPlaceholder;
        } else {
            valueArray[index] = '';
        }
    }

    const foundPlaceholder = [];
    for (let i = 0; i < valueArray.length; i += 1) {
        if (valueArray[i] === inputPlaceholder) {
            foundPlaceholder.push(inputPlaceholder);
        }
    }

    const returnValue = valueArray
        .join('')
        .slice(0, length)
        .trim();
    const returnValueArray = returnValue.split('');

    if (typeof onChangeCallback === 'function') {
        onChangeCallback();
    }

    if (foundPlaceholder.length === returnValueArray.length) {
        return '';
    }

    return returnValue;
}
