export default function passParentState(parent) {
    const children = parent.children;

    for (let i = 0; i < children.length; i += 1) {
        children[i].isChecked = parent.isChecked;
        if (children[i].children) {
            children[i].children = passParentState(children[i]);
        }
    }

    return children;
}
