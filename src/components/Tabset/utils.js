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
    newChildrenRefs.sort(
        (refA, refB) => getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref),
    );
    return newChildrenRefs;
}

export function insertChildOrderly(childrenRefs, childRef, nodes) {
    const newChildrenRefs = childrenRefs.concat([childRef]);
    return sortChildren(newChildrenRefs, nodes);
}

export function getActiveTabIndex(tabChildren, activeTabName) {
    return tabChildren.findIndex(tab => tab.name === activeTabName);
}

export function getChildrenTotalWidth(children) {
    const childrenArray = [].slice.call(children, 0);
    const childrenWidth = childrenArray.map(child => child.offsetWidth);
    return childrenWidth.reduce((prev, curr) => prev + curr);
}
