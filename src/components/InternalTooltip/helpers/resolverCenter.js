export default function resolverCenter(opts) {
    const { trigger, content, viewport } = opts;
    if (
        trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2 + content.width <=
            viewport.width &&
        trigger.leftUpAnchor.y - content.height / 2 >= 0 &&
        trigger.leftUpAnchor.y - content.height / 2 + content.height <= viewport.height
    ) {
        return {
            top: trigger.leftUpAnchor.y - content.height / 2,
            left: trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2,
        };
    }
    return false;
}
