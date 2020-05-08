import { useMemo, useRef } from 'react';

export default function useRefState(ref) {
    const defaultRef = useRef();
    return useMemo(() => {
        return ref || defaultRef;
    }, [ref]);
}
