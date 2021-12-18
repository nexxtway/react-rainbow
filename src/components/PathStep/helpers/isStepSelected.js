export default function isStepSelected(params) {
    const { hoveredIndex, selectedIndex, index } = params;
    if (hoveredIndex !== -1) return false;
    return selectedIndex === index;
}
