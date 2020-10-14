import isContentHidden from './isContentHidden';

const tabbableNode = /input|select|textarea|button|object/;

function isVisible(element) {
    let parentElement = element;
    while (parentElement) {
        if (parentElement === document.body) break;
        if (isContentHidden(parentElement)) return false;
        parentElement = parentElement.parentNode;
    }
    return true;
}

function isFocusable(element, isTabIndexNotNaN) {
    const nodeName = element.nodeName.toLowerCase();
    const res =
        (tabbableNode.test(nodeName) && !element.disabled) ||
        (nodeName === 'a' ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && isVisible(element);
}

function tabbable(element) {
    let tabIndex = element.getAttribute('tabindex');
    if (tabIndex === null) tabIndex = undefined;
    // eslint-disable-next-line no-restricted-globals
    const isTabIndexNaN = isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && isFocusable(element, !isTabIndexNaN);
}

export default function findTabbableElements(element) {
    return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}
