import { useMemo } from 'react';
import isMobileFn from '../utils/isMobile';

export default function useIsMobile() {
    const isMobile = useMemo(() => isMobileFn(), []);

    return isMobile;
}
