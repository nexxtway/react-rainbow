import removeListItemParagraphWrap from './removeListItemParagraphWrap';

export default function getListItemChildren(node, parent) {
    if (node.loose || (parent.node && node.index > 0 && parent.node.children[node.index - 1].loose))
        return node.children;
    return removeListItemParagraphWrap(node);
}
