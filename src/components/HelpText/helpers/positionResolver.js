import resolverBottomLeft from '../../InternalOverlay/helpers/resolverBottomLeft';
import resolverBottomRight from '../../InternalOverlay/helpers/resolverBottomRight';
import resolverUpLeft from '../../InternalOverlay/helpers/resolverUpLeft';
import resolverUpRight from '../../InternalOverlay/helpers/resolverUpRight';
import resolverBottomCenter from './resolverBottomCenter';
import resolverUpCenter from './resolverUpCenter';

const resolvers = [
    resolverBottomRight,
    resolverBottomLeft,
    resolverBottomCenter,
    resolverUpRight,
    resolverUpLeft,
    resolverUpCenter,
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
