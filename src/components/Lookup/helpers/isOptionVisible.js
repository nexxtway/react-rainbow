export default function isOptionVisible(el, container) {
    const { top: elTop, bottom: elBottom } = el.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();
    return elTop >= containerTop && elBottom <= containerBottom;
}
