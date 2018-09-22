export function getChildTabNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('a[role="tab"]');
    }
    return [];
}

function getRefIndex(nodes, ref) {
    return nodes.indexOf(ref);
}

function sortChildren(childrenRefs, nodes) {
    const [...newChildrenRefs] = childrenRefs;
    newChildrenRefs.sort((refA, refB) => getRefIndex(nodes, refA) - getRefIndex(nodes, refB));
    return newChildrenRefs;
}

export function insertChildOrderly(childrenRefs, childRef, nodes) {
    const newChildrenRefs = childrenRefs.concat([childRef]);
    return sortChildren(newChildrenRefs, nodes);
}
