const getHexString = value => {
    if (typeof value !== 'string') return '';
    return value.startsWith('#') ? value : `#${value}`;
};

export default getHexString;
