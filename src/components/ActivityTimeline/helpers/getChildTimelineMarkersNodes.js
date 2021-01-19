export default function getChildTimelineMarkersNodes(ref) {
    if (ref) {
        return ref.querySelectorAll('li[data-id="timeline-marker-li"]');
    }
    return [];
}
