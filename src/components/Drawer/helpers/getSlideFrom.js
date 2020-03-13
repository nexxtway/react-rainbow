export default function getSlideFrom(value, fallback) {
    return ['left', 'right'].includes(value) ? value : fallback;
}
