const getNodeName = ({ parentName, index }) => {
    const nodeLevel = index + 1;
    if (parentName) {
        return `${parentName}.${nodeLevel}`;
    }
    return `node-${nodeLevel}`;
};

export default getNodeName;
