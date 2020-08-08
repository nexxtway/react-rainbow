export default function getNextFocusedNode(nodes, currentFocusedNode, dir) {
    if (nodes.length === 0) return undefined;
    const currentIndex = nodes.indexOf(currentFocusedNode);
    const nextIndex = Math.max(0, Math.min(nodes.length, currentIndex + dir));
    return nodes[nextIndex];
}
