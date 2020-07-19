export default function shouldSelectNode(element, name) {
    let parentElement = element;
    while (parentElement) {
        if (parentElement.getAttribute('data-id') === 'no-selectable-container') {
            return false;
        }
        if (parentElement.tagName === 'LI') {
            return parentElement.id === name;
        }
        parentElement = parentElement.parentNode;
    }
    return false;
}
