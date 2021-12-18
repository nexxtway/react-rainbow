export default function getActiveStepIndex(params) {
    const { hoveredIndex, selectedIndex } = params;
    if (hoveredIndex !== -1) return hoveredIndex;
    return selectedIndex;
}
