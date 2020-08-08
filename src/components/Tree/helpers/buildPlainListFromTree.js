import getNodeName from './getNodeName';
import getNodeLevel from './getNodeLevel';

export default function buildPlainListFromTree(tree, parentName, parentPath) {
    return tree.reduce((result, node, index) => {
        const nodeName = getNodeName({ parentName, index });
        const level = getNodeLevel({ name: nodeName });
        const nodePath = parentPath ? [...parentPath, index] : [index];
        if (node.isExpanded)
            return [
                ...result,
                {
                    name: nodeName,
                    label: node.label.toLowerCase(),
                    level,
                    nodePath,
                    isExpanded: node.isExpanded,
                    hasChildren: node.children && node.children.length > 0,
                },
                ...buildPlainListFromTree(node.children, nodeName, nodePath),
            ];
        return [
            ...result,
            {
                name: nodeName,
                label: node.label.toLowerCase(),
                level,
                nodePath,
                isExpanded: node.isExpanded,
                hasChildren: node.children && node.children.length > 0,
            },
        ];
    }, []);
}
