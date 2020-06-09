export default function isScrollPositionAtScrollable(scrollable) {
    const { scrollHeight, scrollTop, clientHeight } = scrollable;
    return scrollHeight - scrollTop === clientHeight;
}
