export default function getNextFocusedNode(nodes, currentFocusedNode, dir) {
    if (nodes.length === 0) return undefined;
    const namesList = nodes.reduce((result, node) => [...result, node.name], []);
    const currentIndex = namesList.indexOf(currentFocusedNode);
    const nextIndex = Math.max(0, Math.min(nodes.length, currentIndex + dir));
    return namesList[nextIndex];
}
