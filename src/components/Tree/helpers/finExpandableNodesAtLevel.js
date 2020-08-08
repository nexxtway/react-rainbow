export default function finExpandableNodesAtLevel(nodes, level) {
    return nodes.reduce((list, node) => {
        if (node.hasChildren && !node.isExpanded && node.level === level) {
            return [...list, node];
        }
        return list;
    }, []);
}
