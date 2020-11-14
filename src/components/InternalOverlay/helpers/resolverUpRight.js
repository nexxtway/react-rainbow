export default function resolverUpRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightUpAnchor.x - content.width >= 0 &&
        trigger.rightUpAnchor.y - margin - content.height >= 0
    ) {
        return {
            bottom: viewport.height - trigger.leftUpAnchor.y + margin,
            left: trigger.rightUpAnchor.x - content.width,
        };
    }
    return false;
}
