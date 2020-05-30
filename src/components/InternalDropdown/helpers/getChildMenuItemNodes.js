export default function getChildMenuItemNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('div[role="option"]');
    }
    return [];
}
