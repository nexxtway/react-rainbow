export default function getNumbersFromClipboard(value) {
    if (value) {
        const extractedNumbers = value.match(/\d+/g);
        if (extractedNumbers) {
            return extractedNumbers.join('');
        }
    }
    return '';
}
