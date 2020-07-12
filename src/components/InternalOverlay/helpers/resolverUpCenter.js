export default function resolverUpCenter(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightUpAnchor.x - trigger.width / 2 - content.width / 2 >= 0 &&
        trigger.leftUpAnchor.x + trigger.width / 2 + content.width / 2 <= viewport.width &&
        trigger.rightUpAnchor.y - margin - content.height >= 0
    ) {
        return {
            top: trigger.leftUpAnchor.y - margin - content.height,
            left: trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2,
        };
    }
    return false;
}
