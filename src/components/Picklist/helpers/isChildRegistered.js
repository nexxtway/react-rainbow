export default function isChildRegistered(childRef, activeChildren) {
    return activeChildren.findIndex(child => child.ref === childRef) !== -1;
}
