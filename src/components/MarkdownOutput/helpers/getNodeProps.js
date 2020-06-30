import isFunction from './isFunction';

export default function getNodeProps(node, key, options, renderer, parent, index) {
    const props = { key };
    const isCustomRenderer = typeof renderer !== 'string';
    const ref =
        node.identifier !== null && node.identifier !== undefined
            ? options.definitions[node.identifier] || {}
            : null;

    switch (node.type) {
        case 'root':
            break;
        case 'definition':
            props.identifier = node.identifier;
            props.title = node.title;
            props.url = node.url;
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
            props.isOrdered = node.ordered;
            props.tight = !node.loose;
            props.depth = node.depth;
            break;
        case 'listItem':
            props.isChecked = node.checked;
            props.tight = !node.loose;
            props.isOrdered = node.ordered;
            props.index = node.index;
            break;
        case 'code':
            props.language = node.lang && node.lang.split(/\s/, 1)[0];
            break;
        case 'inlineCode':
            props.children = node.value;
            props.inline = true;
            break;
        case 'link':
            props.title = node.title || undefined;
            if (options.linkTarget) {
                props.target = options.linkTarget;
                props.rel = 'noopener noreferrer';
            }
            props.href = isFunction(options.transformLinkUri)
                ? options.transformLinkUri(node.url, node.children, node.title)
                : node.url;
            break;
        case 'image':
            props.id = node.identifier;
            props.alt = node.alt || undefined;
            props.title = node.title || undefined;
            props.src = isFunction(options.transformImageUri)
                ? options.transformImageUri(node.url, node.children, node.title, node.alt)
                : node.url;
            break;
        case 'linkReference':
            Object.assign(props, {
                ...ref,
                href: isFunction(options.transformLinkUri)
                    ? options.transformLinkUri(ref.href)
                    : ref.href,
            });
            break;
        case 'imageReference':
            Object.assign(props, {
                src:
                    isFunction(options.transformImageUri) && ref.href
                        ? options.transformImageUri(ref.href, node.children, ref.title, node.alt)
                        : ref.href,
                title: ref.title || undefined,
                alt: node.alt || undefined,
                id: node.identifier,
            });
            break;
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
            props.isHeader = parent.props.isHeader || false;
            props.align = parent.props.columnAlignment[index];
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
