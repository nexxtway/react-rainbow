export default function isOptionChecked(option, currentValue) {
    return !option.disabled && option.value === currentValue;
}
