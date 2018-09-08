export default function getMaxHeight(children, isExpanded) {
    let height = 0;
    if (isExpanded && children && children.length) {
        height = children.length * 37;
    }
    if (isExpanded && children && !children.length) {
        height = 37;
    }
    return height;
}
