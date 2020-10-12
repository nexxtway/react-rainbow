export default function isOptionVisible(elem, container) {
    const { top: elTop, bottom: elBottom } = elem.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();
    return elTop >= containerTop && elBottom <= containerBottom;
}
