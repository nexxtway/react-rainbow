const getValue = value => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) {
        return 0;
    }
    return value;
};

export default getValue;
