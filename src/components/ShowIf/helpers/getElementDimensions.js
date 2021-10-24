/* eslint-disable no-param-reassign */
const getElementBoundingClientRect = element => {
    if (element) {
        const { position, visibility, display } = element.style;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        const rect = element.getBoundingClientRect();
        element.style.position = position;
        element.style.visibility = visibility;
        element.style.display = display;
        return rect;
    }
    return undefined;
};

export default getElementBoundingClientRect;
