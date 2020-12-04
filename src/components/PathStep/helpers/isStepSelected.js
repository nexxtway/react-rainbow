export default function isStepSelected(params) {
    const { hoveredIndex, someStepHasError, selectedIndex, index } = params;
    if (hoveredIndex !== -1 || someStepHasError) return false;
    return selectedIndex === index;
}
