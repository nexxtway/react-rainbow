import isNumeric from './isNumeric';
import getInputPlaceholder from './getInputPlaceholder';
import getLoopArray from './getLoopArray';

export default function getSingleInputValueFromCode(value, index, length) {
    const returnValuePosition = index + 1;
    const valueArray = value ? value.split('') : getLoopArray(length);
    const found = [];
    const inputPlaceholder = getInputPlaceholder();

    const returnValue = valueArray.filter(singleValue => {
        if (isNumeric(singleValue) || singleValue === inputPlaceholder) {
            found.push(singleValue);

            if (found.length === returnValuePosition) {
                return true;
            }
        }
        return false;
    });

    if (returnValue.length) {
        if (returnValue[0] === '*') {
            return '';
        }
        return returnValue[0];
    }

    return '';
}
