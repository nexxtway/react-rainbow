export default function getDefinitions(node, defs = {}) {
    return (node.children || []).reduce((definitions, child) => {
        if (child.type === 'definition') {
            const newDefinition = {};
            newDefinition[child.identifier] = {
                href: child.url,
                title: child.title,
            };

            return getDefinitions(child, {
                ...definitions,
                ...newDefinition,
            });
        }

        return getDefinitions(child, definitions);
    }, defs);
}
