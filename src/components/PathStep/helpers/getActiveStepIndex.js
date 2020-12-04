export default function getActiveStepIndex(params) {
    const { hoveredIndex, someStepHasError, selectedIndex } = params;
    if (hoveredIndex !== -1) return hoveredIndex;
    if (someStepHasError) return -1;
    return selectedIndex;
}
