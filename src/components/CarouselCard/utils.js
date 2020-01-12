export function getItemIndex(children, id) {
    return children.findIndex(child => child.indicatorID === id);
}

export function getChildTabNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('[role="tabpanel"]');
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

export function getCarouselCardContainerStyles(ref) {
    if (ref && ref.parentNode) {
        const parentHeight = ref.parentNode.style.height;
        if (!parentHeight) {
            return {
                height: 340,
            };
        }
        return {
            height: '100%',
        };
    }
    return null;
}
