export default function isOptionVisible(el, container) {
    const { top: elTop, bottom: elBottom } = el.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();

    return (
        Math.floor(elTop) >= Math.floor(containerTop) &&
        Math.ceil(elBottom) <= Math.ceil(containerBottom)
    );
}
