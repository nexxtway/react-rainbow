export default function resolverBottomRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightBottomAnchor.x - content.width >= 0 &&
        trigger.rightBottomAnchor.y + margin + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftBottomAnchor.y + margin,
            left: trigger.rightBottomAnchor.x - content.width,
        };
    }
    return false;
}
