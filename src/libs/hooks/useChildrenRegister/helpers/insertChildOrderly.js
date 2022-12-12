const getRefIndex = (nodes, ref) => {
    return nodes.indexOf(ref);
};

const sortChildren = (childrenRefs, nodes) => {
    const [...newChildrenRefs] = childrenRefs;
    newChildrenRefs.sort(
        (refA, refB) => getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref),
    );
    return newChildrenRefs;
};

const insertChildOrderly = ({ children, child, nodes }) => {
    return sortChildren([...children, child], nodes);
};

export default insertChildOrderly;
