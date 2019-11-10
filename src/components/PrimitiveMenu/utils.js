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
    const sortedChildren = sortChildren(newChildrenRefs, nodes);
    return sortedChildren;
}

export function findItemByKey(key, childrenRefs) {
    return childrenRefs.find(child => child.innerText[0].toLowerCase() === key.toLowerCase());
}

export function findItemIndex(childrenRefs, item) {
    return childrenRefs.findIndex(child => child === item);
}

export function getChildMenuItemNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('[role="menuitem"]');
    }
    return [];
}
