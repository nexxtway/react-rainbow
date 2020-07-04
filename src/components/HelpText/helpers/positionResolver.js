import resolverBottomLeft from '../../InternalOverlay/helpers/resolverBottomLeft';
import resolverBottomRight from '../../InternalOverlay/helpers/resolverBottomRight';
import resolverUpLeft from '../../InternalOverlay/helpers/resolverUpLeft';
import resolverUpRight from '../../InternalOverlay/helpers/resolverUpRight';
import resolverBottomCenter from '../../InternalOverlay/helpers/resolverBottomCenter';
import resolverUpCenter from '../../InternalOverlay/helpers/resolverUpCenter';
import resolverCenterLeft from '../../InternalOverlay/helpers/resolverCenterLeft';
import resolverCenterRight from '../../InternalOverlay/helpers/resolverCenterRight';

const resolvers = [
    resolverBottomRight,
    resolverBottomLeft,
    resolverBottomCenter,
    resolverUpRight,
    resolverUpLeft,
    resolverUpCenter,
    resolverCenterRight,
    resolverCenterLeft,
];

const positionResolver = opts => {
    let pos;
    resolvers.some(resolver => {
        const ret = resolver(opts);
        if (ret) {
            pos = ret;
            return true;
        }
        return false;
    });
    if (pos) {
        return pos;
    }
    return {
        top: 0,
        left: 0,
    };
};

export default positionResolver;
