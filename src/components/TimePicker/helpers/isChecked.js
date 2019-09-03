export default function isChecked({ inputValue, value, defaultValue }) {
    if (value) {
        return inputValue === value;
    }
    if (defaultValue) {
        return inputValue === defaultValue;
    }
    return inputValue === 'AM';
}
