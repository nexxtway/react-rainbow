export default function getLastVisibleNodeName(nodes) {
    if (nodes.length === 0) return undefined;
    return nodes[nodes.length - 1].name;
}
