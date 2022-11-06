import isInArray from './isInArray';

const getIsExpanded = ({ multiple, activeNames, currentName }) => {
    if (multiple && Array.isArray(activeNames)) {
        return isInArray(activeNames, currentName);
    }
    return activeNames === currentName;
};

export default getIsExpanded;
