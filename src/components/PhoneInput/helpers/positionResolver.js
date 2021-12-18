import InternalOverlay from '../../InternalOverlay';

export default function positionResolver(opts) {
    const { trigger, viewport, content } = opts;
    const newOpts = {
        trigger,
        viewport,
        content: {
            ...content,
            width: trigger.width,
        },
    };
    return {
        ...InternalOverlay.defaultPositionResolver(newOpts),
        width: trigger.width,
    };
}
