export default function getMaxHeight(children, isExpanded) {
    let height = 0;
    if (isExpanded && children && children.length) {
        height = children.length * 45;
    }
    if (isExpanded && children && !children.length) {
        height = 45;
    }
    return height;
}
