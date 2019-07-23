export default function isOptionChecked(option, currentValue) {
    if (!currentValue) {
        return false;
    }
    return !option.disabled && option.value === currentValue;
}
