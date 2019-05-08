export default function isOptionVisible(el, container) {
    const { top: elTop, bottom: elBottom } = el.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();
    const isVisible = (elTop >= containerTop) && (elBottom <= containerBottom);
    return isVisible;
}
