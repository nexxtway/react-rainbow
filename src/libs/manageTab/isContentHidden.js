export default function isContentHidden(element) {
    const zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

    // If the node is empty, this is good enough
    if (zeroSize && !element.innerHTML) return true;

    // Otherwise we need to check some styles
    const style = window.getComputedStyle(element);
    return zeroSize
        ? style.getPropertyValue('overflow') !== 'visible'
        : style.getPropertyValue('display') === 'none';
}
