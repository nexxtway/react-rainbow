export default function getInputValue(value, placeholder) {
    if (!value && placeholder) {
        return '';
    }
    return value || '--:-- --';
}
