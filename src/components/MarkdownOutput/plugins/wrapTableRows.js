import visit from 'unist-util-visit';

function wrap(table) {
    const { children } = table;
    Object.assign(table, {
        children: [
            {
                type: 'tableHead',
                align: table.align,
                children: [children[0]],
                position: children[0].position,
            },
        ],
    });

    if (children.length > 1) {
        table.children.push({
            type: 'tableBody',
            align: table.align,
            children: children.slice(1),
            position: {
                start: children[1].position.start,
                end: children[children.length - 1].position.end,
            },
        });
    }
}

export default function wrapTableRows(node) {
    visit(node, 'table', wrap);
    return node;
}
