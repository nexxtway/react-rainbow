export default function getNodeProps(node, key, opts, renderer, parent, index) {
    const props = { key };
    const isCustomRenderer = typeof renderer !== 'string';
    // const ref =
    //     node.identifier !== null && node.identifier !== undefined
    //         ? opts.definitions[node.identifier] || {}
    //         : null;

    switch (node.type) {
        case 'root':
            break;
        case 'definition':
            Object.assign(props, { identifier: node.identifier, title: node.title, url: node.url });
            break;
        case 'text':
            props.nodeKey = key;
            props.children = node.value;
            break;
        case 'heading':
            props.level = node.depth;
            break;
        case 'list':
            props.start = node.start;
            props.ordered = node.ordered;
            props.tight = !node.loose;
            props.depth = node.depth;
            break;
        case 'listItem':
            props.checked = node.checked;
            props.tight = !node.loose;
            props.ordered = node.ordered;
            props.index = node.index;
            // props.children = getListItemChildren(node, parent).map((childNode, i) => {
            //     return astToReact(childNode, opts, { node: node, props: props }, i);
            // });
            break;
        case 'code':
            Object.assign(props, { language: node.lang && node.lang.split(/\s/, 1)[0] });
            break;
        case 'inlineCode':
            props.children = node.value;
            props.inline = true;
            break;
        // case 'link':
        //     assignDefined(props, {
        //         title: node.title || undefined,
        //         target:
        //             typeof opts.linkTarget === 'function'
        //                 ? opts.linkTarget(node.url, node.children, node.title)
        //                 : opts.linkTarget,
        //         href: opts.transformLinkUri
        //             ? opts.transformLinkUri(node.url, node.children, node.title)
        //             : node.url,
        //     });
        //     break;
        // case 'image':
        //     assignDefined(props, {
        //         alt: node.alt || undefined,
        //         title: node.title || undefined,
        //         src: opts.transformImageUri
        //             ? opts.transformImageUri(node.url, node.children, node.title, node.alt)
        //             : node.url,
        //     });
        //     break;
        // case 'linkReference':
        //     assignDefined(
        //         props,
        //         xtend(ref, {
        //             href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href,
        //         }),
        //     );
        //     break;
        // case 'imageReference':
        //     assignDefined(props, {
        //         src:
        //             opts.transformImageUri && ref.href
        //                 ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt)
        //                 : ref.href,
        //         title: ref.title || undefined,
        //         alt: node.alt || undefined,
        //     });
        //     break;
        case 'table':
        case 'tableHead':
        case 'tableBody':
            props.columnAlignment = node.align;
            break;
        case 'tableRow':
            props.isHeader = parent.node.type === 'tableHead';
            props.columnAlignment = parent.props.columnAlignment;
            break;
        case 'tableCell':
            Object.assign(props, {
                isHeader: parent.props.isHeader || false,
                align: parent.props.columnAlignment[index],
            });
            break;
        case 'virtualHtml':
            props.tag = node.tag;
            break;
        default:
            Object.assign(props, {
                ...node,
                type: undefined,
                position: undefined,
                children: undefined,
            });
    }

    if (isCustomRenderer && node.value) {
        props.value = node.value;
    }

    return props;
}
