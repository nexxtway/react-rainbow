export default function getLastRootNodeName(nodes) {
    const lastNodeIndex = nodes.reduce((result, nodeName) => {
        const nodeRoot = nodeName.substr(5, nodeName.indexOf('.') - 5);
        return Math.max(result, nodeRoot);
    }, 0);

    return lastNodeIndex !== 0 ? `node-${lastNodeIndex + 1}` : undefined;
}
