export default function isScrollPositionAtMenuBottom(menuRef) {
    const { scrollHeight, scrollTop, clientHeight } = menuRef;
    return scrollHeight - scrollTop === clientHeight;
}
