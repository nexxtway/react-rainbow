import getValue from './getValue';

const isMax = (number, step, max) => {
    if (getValue(Number(number)) + step > max) {
        return true;
    }
    return false;
};

export default isMax;
