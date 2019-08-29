export default function isScrolPositionlAtMenuBottom(menuRef) {
    const { scrollHeight, scrollTop, clientHeight } = menuRef;
    return scrollHeight - scrollTop === clientHeight;
}
