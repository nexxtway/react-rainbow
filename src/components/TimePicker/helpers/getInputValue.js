export default function getInputValue(value, placeholder, hour24 = false) {
    if (!value && placeholder) {
        return '';
    }
    if (hour24) return value || '--:--';
    return value || '--:-- --';
}
