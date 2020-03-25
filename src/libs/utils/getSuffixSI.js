export default function getSuffixSI(number) {
    if (!number || number < 0) {
        // eslint-disable-next-line no-console
        console.error('Invalid number');
        return '';
    }
    const SI_POSTFIXES = ['', 'k', 'M', 'G'];
    // eslint-disable-next-line no-bitwise
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0) return number;
    const postfix = SI_POSTFIXES[tier];
    // eslint-disable-next-line no-restricted-properties
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = `${scaled.toFixed(1)}`;
    if (/\.0$/.test(formatted)) {
        formatted = formatted.substr(0, formatted.length - 2);
    }
    return formatted + postfix;
}
