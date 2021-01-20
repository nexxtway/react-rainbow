import { isServer } from '../../../libs/utils';

export default function isValidColor(color) {
    if (isServer) return true;
    const element = document.createElement('a');
    element.style.color = color;
    return element.style.color !== '';
}
