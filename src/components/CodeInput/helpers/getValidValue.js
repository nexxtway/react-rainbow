export default function getValidValue(value, codeLength) {
    if (value) {
        const extractedNumbers = value.match(/\d+/g);
        const numbers = [];
        for (let i = 0; i <= extractedNumbers.length; i += 1) {
            numbers.push(extractedNumbers[i]);
        }
        return numbers.join('').slice(0, codeLength);
    }
    return '';
}
