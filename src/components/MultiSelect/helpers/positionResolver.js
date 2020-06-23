import InternalOverlay from '../../InternalOverlay';

export default function positionResolver(opts) {
    const { trigger, viewport, content } = opts;
    const newOpts = {
        trigger,
        viewport,
        content: {
            ...content,
        },
    };
    const pos = InternalOverlay.defaultPositionResolver(newOpts);
    pos.left = trigger.rightBottomAnchor.x - content.width;
    return pos;
}
