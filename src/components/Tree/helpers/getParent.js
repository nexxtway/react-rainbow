const getParent = (tree, childPath) => {
    const superiorNode = tree[childPath[0]];
    if (childPath.length === 2) {
        return superiorNode;
    }
    return getParent(superiorNode.children, childPath.slice(1, childPath.length));
};

export default getParent;
