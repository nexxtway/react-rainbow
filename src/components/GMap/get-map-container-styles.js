export default function getMapContainerStyles(ref) {
    if (ref && ref.parentNode.parentNode) {
        const parentContainer = ref.parentNode.parentNode;
        if (parentContainer.style.height === '') {
            return {
                minHeight: 300,
            };
        }
        return null;
    }
    return null;
}
