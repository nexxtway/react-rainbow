const getTabIndex = ({ name, selectedNode, isSelected, isFirstNode, focusedNode }) => {
    if (
        (focusedNode && name === focusedNode) ||
        (isSelected && !focusedNode) ||
        (isFirstNode && !selectedNode && !focusedNode)
    ) {
        return 0;
    }
    return -1;
};

export default getTabIndex;
