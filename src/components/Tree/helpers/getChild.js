const getChild = (tree, childPath) => {
    const firstNode = tree[childPath[0]];
    if (childPath.length === 1) {
        return firstNode;
    }
    return getChild(firstNode.children, childPath.slice(1, childPath.length));
};

export default getChild;
