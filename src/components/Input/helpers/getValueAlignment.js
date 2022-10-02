export default function getValueAlignment({ valueAlignment, isCentered }) {
    if (valueAlignment) {
        return valueAlignment;
    }
    if (isCentered) {
        return 'center';
    }
    return undefined;
}
