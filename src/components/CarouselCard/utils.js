export function getItemIndex(children, id) {
    return children.findIndex(child => child.indicatorID === id);
}

export function getChildTabNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('a.rainbow-carousel-image');
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
export function carouselCardContainerStyles(ref) {
    if (ref && ref.parentNode) {
        const style = {
            width: 340,
            height: 340,
        };
        const parentHeight = ref.parentNode.style.height;
        const parentWidth = ref.parentNode.style.width;

        if (parentHeight) {
            style.height = parentHeight;
        }
        if (parentWidth) {
            style.width = parentWidth;
        }
        return style;
    }
    return null;
}
