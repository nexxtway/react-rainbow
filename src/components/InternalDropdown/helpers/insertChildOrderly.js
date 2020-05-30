function getRefIndex(nodes, ref) {
    return nodes.indexOf(ref);
}

function sortChildren(children, nodes) {
    const [...newChildren] = children;
    newChildren.sort(
        (childA, childB) => getRefIndex(nodes, childA.ref) - getRefIndex(nodes, childB.ref),
    );
    return newChildren;
}

export default function insertChildOrderly(children, child, nodes) {
    const newChildren = children.concat([child]);
    const sortedChildren = sortChildren(newChildren, nodes);
    return sortedChildren;
}
