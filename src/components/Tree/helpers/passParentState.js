export default function pasingParentState(parent) {
    const children = parent.children;

    for (let i = 0; i < children.length; i += 1) {
        children[i].isChecked = parent.isChecked;
    }

    return children;
}
