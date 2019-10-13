import getNormalizeValue from './getNormalizeValue';

export default function getSelectedOptionName(value) {
    if (value) {
        const { name } = getNormalizeValue(value);
        return name;
    }
    return undefined;
}
