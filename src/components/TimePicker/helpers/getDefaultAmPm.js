export default function getDefaultAmPm(value) {
    const numberValue = Number(value);
    return numberValue > 11 && numberValue < 20 ? 'PM' : 'AM';
}
