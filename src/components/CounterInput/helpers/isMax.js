const isMax = (number, step, max) => {
    if (number + step > max) {
        return true;
    }
    return false;
};

export default isMax;
