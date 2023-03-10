const sizesMap = {
    small: 'x-small',
    medium: 'small',
    large: 'medium',
};

const getSizeButton = size => sizesMap[size] || sizesMap.medium;

export default getSizeButton;
