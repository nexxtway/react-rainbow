export default function isChildRegistered(name, activeChildren) {
    return activeChildren.findIndex(child => child.name === name) !== -1;
}
