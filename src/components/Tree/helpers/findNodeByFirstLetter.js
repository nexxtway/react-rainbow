export default function findNodeByFirstLetter(nodes, searchTerm, fromIndex) {
    const head = nodes.slice(0, fromIndex);
    const tail = nodes.slice(fromIndex + 1);
    return [...tail, ...head].find(node => {
        if (typeof node.label === 'string') {
            return node.label.indexOf(searchTerm.toLowerCase()) === 0;
        }
        return false;
    });
}
