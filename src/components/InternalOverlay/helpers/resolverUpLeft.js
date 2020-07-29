export default function resolverUpLeft(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.leftUpAnchor.x + content.width <= viewport.width &&
        trigger.leftUpAnchor.y - margin - content.height >= 0
    ) {
        return {
            top: trigger.leftUpAnchor.y - margin - content.height,
            left: trigger.leftBottomAnchor.x,
        };
    }
    return false;
}
