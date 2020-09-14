import InternalOverlay from '../InternalOverlay';

const DEFAULT_MARGIN = 5;

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

export function isPrintableCharacter(str) {
    if (typeof str !== 'string') return false;
    return str.length === 1 && /\S/.test(str);
}

function getDesiredPosition(options, alignment, margin) {
    const {
        trigger: {
            leftUpAnchor,
            leftBottomAnchor,
            rightUpAnchor,
            rightBottomAnchor,
            width: triggerWidth,
        },
        content: { width: contentWidth, height: contentHeight },
    } = options;
    if (alignment === 'right') {
        return {
            left: rightBottomAnchor.x - contentWidth,
            top: rightBottomAnchor.y + margin,
        };
    }
    if (alignment === 'bottom') {
        return {
            left: leftUpAnchor.x + (triggerWidth - contentWidth) / 2,
            top: leftUpAnchor.y - contentHeight - margin,
        };
    }
    if (alignment === 'center') {
        return {
            left: leftBottomAnchor.x + (triggerWidth - contentWidth) / 2,
            top: leftBottomAnchor.y + margin,
        };
    }
    if (alignment === 'bottom-right') {
        return {
            left: rightUpAnchor.x - contentWidth,
            top: leftUpAnchor.y - contentHeight - margin,
        };
    }
    if (alignment === 'bottom-left') {
        return {
            left: leftUpAnchor.x,
            top: leftUpAnchor.y - contentHeight - margin,
        };
    }
    return {
        left: leftBottomAnchor.x,
        top: leftBottomAnchor.y + margin,
    };
}

export function resolvePosition(options, alignment) {
    const defaultPosition = InternalOverlay.defaultPositionResolver(options);
    const desiredPosition = getDesiredPosition(options, alignment, DEFAULT_MARGIN);
    const {
        viewport: { width: viewportWidth, height: viewportHeight },
        content: { width: contentWidth, height: contentHeight },
    } = options;

    if (
        viewportWidth - (desiredPosition.left + contentWidth) >= 0 &&
        viewportHeight - (desiredPosition.top + contentHeight) >= 0
    ) {
        return desiredPosition;
    }

    return defaultPosition;
}
