export default function isScrolPositionlAtMenuBottom(menuRef) {
    return menuRef.scrollHeight - menuRef.scrollTop === menuRef.clientHeight;
}
