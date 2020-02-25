import singlePageBorderRadius from './singlePageBorderRadius';
import multiplePageBorderRadius from './multiplePageBorderRadius';

const getBorderRadius = totalPages => {
    const hasMultiplePages = !!totalPages && totalPages > 1;

    return hasMultiplePages ? multiplePageBorderRadius : singlePageBorderRadius;
};

export default getBorderRadius;
