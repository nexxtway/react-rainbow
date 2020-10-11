const getValueOfNan = value => {
    if (isNaN(value)) {
        return 0;
    }
    return value;
};

export default getValueOfNan;
