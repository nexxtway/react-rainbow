export default function resolverTopRight(opts, margin = 0) {
    const { trigger, content, viewport } = opts;
    if (trigger.rightUpAnchor.x + margin + content.width <= viewport.width) {
        return {
            top: 0,
            left: trigger.rightUpAnchor.x + margin,
        };
    }
    return false;
}
