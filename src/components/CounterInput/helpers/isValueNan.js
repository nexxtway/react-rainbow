const isValueNan = value => {
    if (isNaN(value)) {
        return 0;
    }
    return value;
};

export default isValueNan;
