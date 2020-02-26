const getPageBorderRadius = pages => {
    if (pages === 1) {
        return '100px';
    }
    return '0 100px 100px 0';
};

export default getPageBorderRadius;
