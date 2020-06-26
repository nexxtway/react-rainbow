export default function removeListItemParagraphWrap(node) {
    return node.children.reduce((newChildrenList, child) => {
        return newChildrenList.concat(child.type === 'paragraph' ? child.children || [] : [child]);
    }, []);
}
