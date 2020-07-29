export default function resolverBottomLeft(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.leftBottomAnchor.x + content.width <= viewport.width &&
        trigger.leftBottomAnchor.y + margin + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftBottomAnchor.y + margin,
            left: trigger.leftBottomAnchor.x,
        };
    }
    return false;
}
