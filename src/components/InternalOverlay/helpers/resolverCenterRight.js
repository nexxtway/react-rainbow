export default function resolverCenterRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.leftUpAnchor.x - margin - content.width >= 0 &&
        trigger.rightBottomAnchor.y - trigger.height / 2 + content.height / 2 <= viewport.height &&
        trigger.rightUpAnchor.y + trigger.height / 2 - content.height / 2 >= 0
    ) {
        return {
            top: trigger.rightUpAnchor.y + trigger.height / 2 - content.height / 2,
            left: trigger.leftUpAnchor.x - margin - content.width,
        };
    }
    return false;
}
