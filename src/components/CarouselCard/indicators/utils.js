export function getChildTabNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('[role="tab"]');
    }
    return [];
}
