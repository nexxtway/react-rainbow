const getNode = (tree, nodePath) => {
    const firstNode = tree[nodePath[0]];
    if (nodePath.length === 1) {
        return firstNode;
    }
    return getNode(firstNode.children, nodePath.slice(1, nodePath.length));
};

export default getNode;
