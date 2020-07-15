export default function resolverCenterLeft(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightUpAnchor.x + margin + content.width <= viewport.width &&
        trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2 >= 0 &&
        trigger.leftBottomAnchor.y - trigger.height / 2 + content.height / 2 <= viewport.height
    ) {
        return {
            top: trigger.leftUpAnchor.y + trigger.height / 2 - content.height / 2,
            left: trigger.rightUpAnchor.x + margin,
        };
    }
    return false;
}
