import resolverBottomLeft from './resolverBottomLeft';
import resolverBottomRight from './resolverBottomRight';
import resolverUpLeft from './resolverUpLeft';
import resolverUpRight from './resolverUpRight';
import resolverBottomCenter from './resolverBottomCenter';
import resolverUpCenter from './resolverUpCenter';
import resolverCenterLeft from './resolverCenterLeft';
import resolverCenterRight from './resolverCenterRight';

const resolvers = [
    resolverBottomLeft,
    resolverBottomRight,
    resolverBottomCenter,
    resolverUpLeft,
    resolverUpRight,
    resolverUpCenter,
    resolverCenterLeft,
    resolverCenterRight,
];

export default function defaultPositionResolver(opts, margin = 5) {
    let pos;
    resolvers.some(resolver => {
        const ret = resolver(opts, margin);
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
