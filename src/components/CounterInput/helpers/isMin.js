const isMin = (number, step, min) => {
    if (number - step < min) {
        return true;
    }
    return false;
};

export default isMin;
