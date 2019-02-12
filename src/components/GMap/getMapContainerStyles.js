export default function getMapContainerStyles(ref) {
    if (ref && ref.parentNode) {
        const parentHeight = ref.parentNode.style.height;
        if (!parentHeight) {
            return {
                minHeight: 300,
            };
        }
        return null;
    }
    return null;
}
