import getNormalizeValue from './getNormalizeValue';

export default function getInitialSelectedOptionName({ value }) {
    if (value) {
        const { name } = getNormalizeValue(value);
        return name;
    }
    return undefined;
}
