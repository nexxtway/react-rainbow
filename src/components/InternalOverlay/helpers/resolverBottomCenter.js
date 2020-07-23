export default function resolverBottomCenter(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightBottomAnchor.x - trigger.width / 2 - content.width / 2 >= 0 &&
        trigger.leftBottomAnchor.x + trigger.width / 2 + content.width / 2 <= viewport.width &&
        trigger.leftBottomAnchor.y + margin + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftBottomAnchor.y + margin,
            left: trigger.rightBottomAnchor.x - content.width / 2 - trigger.width / 2,
        };
    }
    return false;
}
