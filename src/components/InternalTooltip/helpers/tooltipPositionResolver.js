import resolverUpCenter from '../../InternalOverlay/helpers/resolverUpCenter';
import resolverBottomCenter from '../../InternalOverlay/helpers/resolverBottomCenter';
import resolverCenterLeft from '../../InternalOverlay/helpers/resolverCenterLeft';
import resolverCenterRight from '../../InternalOverlay/helpers/resolverCenterRight';
import resolverCenter from './resolverCenter';

const DEFAULT_MARGIN = 5;

const resolverMap = {
    top: [
        resolverUpCenter,
        resolverBottomCenter,
        resolverCenterLeft,
        resolverCenterRight,
        resolverCenter,
    ],
    bottom: [
        resolverBottomCenter,
        resolverUpCenter,
        resolverCenterLeft,
        resolverCenterRight,
        resolverCenter,
    ],
    left: [
        resolverCenterRight,
        resolverCenterLeft,
        resolverUpCenter,
        resolverBottomCenter,
        resolverCenter,
    ],
    right: [
        resolverCenterLeft,
        resolverCenterRight,
        resolverUpCenter,
        resolverBottomCenter,
        resolverCenter,
    ],
};

export default function tooltipPositionResolver(opts, position = 'top') {
    const resolvers = resolverMap[position];
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
