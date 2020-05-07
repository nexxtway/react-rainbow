export default function getValueArray(value, maxLength) {
    if (value) {
        const extractedNumbers = value.toString().match(/\d+/g);

        if (extractedNumbers) {
            const numbersArray = extractedNumbers
                .join('')
                .slice(0, maxLength)
                .split('');

            const emptyFieldsArray = Array(maxLength - numbersArray.length).fill('');

            return numbersArray.concat(...emptyFieldsArray);
        }
    }

    return Array(maxLength).fill('');
}
