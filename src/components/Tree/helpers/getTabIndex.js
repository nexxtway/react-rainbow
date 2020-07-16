const getTabIndex = ({ selectedNode, isSelected, isFirstNode }) => {
    if (isSelected) {
        return 0;
    }
    if (!selectedNode && isFirstNode) {
        return 0;
    }
    return -1;
};

export default getTabIndex;
