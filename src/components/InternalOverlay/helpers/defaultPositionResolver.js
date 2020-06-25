import resolverBottomLeft from './resolverBottomLeft';
import resolverBottomRight from './resolverBottomRight';
import resolverUpLeft from './resolverUpLeft';
import resolverUpRight from './resolverUpRight';

const DEFAULT_MARGIN = 5;

const resolvers = [resolverBottomLeft, resolverBottomRight, resolverUpLeft, resolverUpRight];

export default function defaultPositionResolver(opts) {
    let pos;
    resolvers.some(resolver => {
        const ret = resolver(opts, DEFAULT_MARGIN);
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
}
