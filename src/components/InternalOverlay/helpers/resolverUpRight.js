export default function resolverUpRight(opts, margin = 0) {
    const { trigger, content } = opts;
    if (
        trigger.rightUpAnchor.x - content.width >= 0 &&
        trigger.rightUpAnchor.y - margin - content.height >= 0
    ) {
        return {
            top: trigger.leftUpAnchor.y - margin - content.height,
            left: trigger.rightUpAnchor.x - content.width,
        };
    }
    return false;
}
