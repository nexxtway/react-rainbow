export default function isValidColor(color) {
    const element = document.createElement('a');
    element.style.color = color;
    return element.style.color !== '';
}
