export default function getChildStepsNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('li[role="option"]');
    }
    return [];
}
