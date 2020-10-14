export default function calculateBright(event, rect) {
    const { height, top } = rect;
    // eslint-disable-next-line id-length
    const y = typeof event.pageY === 'number' ? event.pageY : event.touches[0].pageY;
    const relativeTop = Math.min(Math.max(0, y - (top + window.pageYOffset)), height);

    return Math.round((1 - relativeTop / height) * 100);
}
