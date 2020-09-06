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

export function findItemByKey(key, childrenRefs, fromIndex) {
    const head = childrenRefs.slice(0, fromIndex);
    const tail = childrenRefs.slice(fromIndex + 1);
    return [...tail, ...head].find(
        child => child.innerText.toLowerCase().indexOf(key.toLowerCase()) === 0,
    );
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

export function resolvePosition(options, alignment) {
    const {
        trigger: { leftUpAnchor, leftBottomAnchor, rightUpAnchor, rightBottomAnchor, width },
    } = options;
    if (alignment === 'right') {
        return {
            left: rightBottomAnchor.x,
            top: rightBottomAnchor.y,
        };
    }
    if (alignment === 'bottom') {
        return {
            left: leftUpAnchor.x + width / 2,
            top: leftUpAnchor.y,
        };
    }
    if (alignment === 'center') {
        return {
            left: leftBottomAnchor.x + width / 2,
            top: leftBottomAnchor.y,
        };
    }
    if (alignment === 'bottom-right') {
        return {
            left: rightUpAnchor.x,
            top: leftUpAnchor.y,
        };
    }
    if (alignment === 'bottom-left') {
        return {
            left: leftUpAnchor.x,
            top: leftUpAnchor.y,
        };
    }
    return {
        left: leftBottomAnchor.x,
        top: leftBottomAnchor.y,
    };
}

export function isPrintableCharacter(str) {
    if (typeof str !== 'string') return false;
    return str.length === 1 && /\S/.test(str);
}
