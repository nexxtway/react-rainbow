import getNodeName from './getNodeName';
import getNodeLevel from './getNodeLevel';

export default function buildPlainListFromTree(tree, parentName, parentPath) {
    if (!Array.isArray(tree)) return [];
    return tree.reduce((result, node, index) => {
        const nodeName = getNodeName({ parentName, index });
        const level = getNodeLevel({ name: nodeName });
        const nodePath = parentPath ? [...parentPath, index] : [index];
        const nodeLabel = typeof node.label === 'string' ? node.label.toLowerCase() : node.label;
        if (node.isExpanded) {
            return [
                ...result,
                {
                    name: nodeName,
                    label: nodeLabel,
                    level,
                    nodePath,
                    isExpanded: node.isExpanded,
                    hasChildren: node.children && node.children.length > 0,
                },
                ...buildPlainListFromTree(node.children, nodeName, nodePath),
            ];
        }
        return [
            ...result,
            {
                name: nodeName,
                label: nodeLabel,
                level,
                nodePath,
                isExpanded: node.isExpanded,
                hasChildren: node.children && node.children.length > 0,
            },
        ];
    }, []);
}
