export default function resolverTopLeft(opts, margin = 0) {
    const { trigger, content } = opts;
    if (trigger.leftUpAnchor.x - margin - content.width >= 0) {
        return {
            top: 0,
            left: trigger.leftUpAnchor.x - margin - content.width,
        };
    }
    return false;
}
