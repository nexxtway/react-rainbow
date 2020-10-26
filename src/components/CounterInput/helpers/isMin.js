import getValue from './getValue';

const isMin = (number, step, min) => {
    if (getValue(Number(number)) - step < min) {
        return true;
    }
    return false;
};

export default isMin;
