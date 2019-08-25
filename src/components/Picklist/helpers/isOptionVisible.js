export default function isOptionVisible(
    el,
    container,
    scrollTopArrowVisible,
    scrollDownArrowVisible,
    arrowHeight,
) {
    const { top: elTop, bottom: elBottom } = el.getBoundingClientRect();
    let { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();

    if (scrollTopArrowVisible) {
        containerTop += arrowHeight;
    }

    if (scrollDownArrowVisible) {
        containerBottom -= arrowHeight;
    }

    return (
        Math.floor(elTop) >= Math.floor(containerTop) &&
        Math.ceil(elBottom) <= Math.ceil(containerBottom)
    );
}
