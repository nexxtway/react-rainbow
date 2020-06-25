export default function resolverUpCenter(opts) {
    const { trigger, content } = opts;
    if (trigger.rightUpAnchor.y - content.height >= 0) {
        return {
            top: trigger.leftUpAnchor.y - content.height,
            left: trigger.rightUpAnchor.x - content.width / 2 - trigger.width / 2,
        };
    }
    return false;
}
