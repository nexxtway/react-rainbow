import getNodeName from './getNodeName';

export default function buildPlainListFromTree(tree, parentName) {
    return tree.reduce((result, node, index) => {
        const nodeName = getNodeName({ parentName, index });
        if (node.isExpanded)
            return [...result, nodeName, ...buildPlainListFromTree(node.children, nodeName)];
        return [...result, nodeName];
    }, []);
}
