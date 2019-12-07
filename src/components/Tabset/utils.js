export function getChildTabNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('[role="tab"]');
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

export function getTabIndexFromName(tabChildren, name) {
    return tabChildren.findIndex(tab => tab.name === name);
}

function getTotalWidth(children) {
    let totalWidth = 0;
    children.forEach(child => {
        totalWidth += child.ref.offsetWidth;
    });
    return totalWidth;
}

export function getChildrenTotalWidth(children) {
    return getTotalWidth(children);
}

export function getChildrenTotalWidthUpToClickedTab(children, index) {
    const childrenUpToClickedTab = children.slice(0, index);
    return getTotalWidth(childrenUpToClickedTab);
}

export function isNotSameChildren(children, prevChildren) {
    return children.some((child, index) => {
        if (child && prevChildren[index]) {
            return child.props.name !== prevChildren[index].props.name;
        }
        return false;
    });
}

export function getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate) {
    return tabsetChildren.map(child => {
        if (child.name === nameToUpdate) {
            return tab;
        }
        return child;
    });
}

export function getLeftButtonDisabledState(params) {
    const { activeTabName, tabsetChildren, screenWidth, scrollLeft } = params;
    const activeTabIndex = getTabIndexFromName(tabsetChildren, activeTabName);
    const isFirstTabActive = activeTabIndex === 0;
    const isFirstTabVisible = scrollLeft === 0;

    if (screenWidth < 600 && isFirstTabActive) {
        return true;
    }
    if (screenWidth > 600 && isFirstTabVisible) {
        return true;
    }
    return false;
}

export function getRightButtonDisabledState(params) {
    const { activeTabName, tabsetChildren, screenWidth, scrollLeft, maxScroll } = params;
    const lastTabIndex = tabsetChildren.length - 1;
    const activeTabIndex = getTabIndexFromName(tabsetChildren, activeTabName);
    const isLastTabActive = lastTabIndex === activeTabIndex;
    const isLastTabVisible = scrollLeft === maxScroll;

    if (screenWidth < 600 && isLastTabActive) {
        return true;
    }
    if (screenWidth > 600 && isLastTabVisible) {
        return true;
    }
    return false;
}
