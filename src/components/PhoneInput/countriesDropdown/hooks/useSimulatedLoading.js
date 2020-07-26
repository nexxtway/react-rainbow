import { useRef, useReducer, useEffect } from 'react';

export default function useSimulatedLoading(list, delta) {
    const loading = useRef(true);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        if (loading.current) {
            loading.current = false;
            forceUpdate();
        } else {
            loading.current = true;
        }
    });

    if (loading.current) {
        return list.slice(0, delta);
    }
    return list;
}
