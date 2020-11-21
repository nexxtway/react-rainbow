import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from '../../../libs/scrollController';

const useDisableScroll = shouldDisableScroll => {
    useEffect(() => {
        if (shouldDisableScroll) {
            disableBodyScroll(undefined, { reserveScrollBarGap: true });
        }
        return () => {
            if (shouldDisableScroll) {
                enableBodyScroll();
            }
        };
    }, [shouldDisableScroll]);
};

export default useDisableScroll;
