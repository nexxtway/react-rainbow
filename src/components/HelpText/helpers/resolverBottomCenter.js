export default function resolverBottomCenter(opts) {
    const { trigger, content, viewport } = opts;
    if (trigger.leftBottomAnchor.y + content.height <= viewport.height) {
        return {
            top: trigger.leftBottomAnchor.y,
            left: trigger.rightBottomAnchor.x - content.width / 2 - trigger.width / 2,
        };
    }
    return false;
}
