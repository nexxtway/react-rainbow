import defaultPositionResolver from '../../InternalOverlay/helpers/defaultPositionResolver';

const positionResolver = opts => {
    const { trigger } = opts;
    const position = defaultPositionResolver(opts);

    return {
        ...position,
        width: trigger.width,
    };
};

export default positionResolver;
