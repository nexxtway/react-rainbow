export default function getLastRootNodeName(nodes) {
    const lastNodeIndex = nodes.reduce((result, node) => {
        const nodeRoot = node.name.substr(5, node.name.indexOf('.') - 5);
        return Math.max(result, nodeRoot);
    }, 0);

    return lastNodeIndex !== 0 ? `node-${lastNodeIndex + 1}` : undefined;
}
