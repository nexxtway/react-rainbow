const getAmPmValue = hour => {
    const hourNumber = Number(hour);
    if (hourNumber > 11) {
        return 'PM';
    }
    return 'AM';
};

export default getAmPmValue;
