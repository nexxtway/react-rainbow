const getPageBorderRadius = totalPages => {
    const hasMultiplePages = !!totalPages && totalPages > 1;

    return hasMultiplePages ? '0 100px 100px 0' : '100px';
};

export default getPageBorderRadius;
