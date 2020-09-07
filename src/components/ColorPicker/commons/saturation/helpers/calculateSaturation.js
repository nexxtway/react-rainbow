export default function calculateSaturation(event, rect) {
    const { width, left } = rect;
    const x = typeof event.pageX === 'number' ? event.pageX : event.touches[0].pageX;
    const relativeLeft = Math.min(Math.max(0, x - (left + window.pageXOffset)), width);

    return Math.round((relativeLeft / width) * 100);
}
