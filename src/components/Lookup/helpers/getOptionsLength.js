export default function getOptionsLength(options = []) {
    let number = 0;
    options.forEach(option => {
        if (option.type !== 'header') {
            number += 1;
        }
    });
    return number;
}
