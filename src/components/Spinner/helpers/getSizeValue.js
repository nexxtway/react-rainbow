const sizeMap = {
    'x-large': '82',
    large: '48',
    medium: '32',
    small: '26',
    'x-small': '20',
    'xx-small': '16',
};

export default function getSizeValue(size) {
    if (size) {
        return sizeMap[size] || sizeMap.medium;
    }
    return sizeMap.medium;
}
