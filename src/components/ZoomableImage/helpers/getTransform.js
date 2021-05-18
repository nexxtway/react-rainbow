export default function getTransform(rect) {
    const { top, left, width, height } = rect;
    const viewportWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
    );
    const viewportHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
    );
    const translateX = viewportWidth / 2 - width / 2 - left;
    const translateY = viewportHeight / 2 - height / 2 - top;

    const widthRatio = width / viewportWidth;
    const heightRatio = height / viewportHeight;

    return {
        translateX,
        translateY,
        scale: heightRatio > widthRatio ? viewportHeight / height : viewportWidth / width,
    };
}
