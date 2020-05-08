import { useRef, useEffect } from 'react';

export default function usePreviousIndex(focusedIndex) {
    const ref = useRef();
    useEffect(() => {
        ref.current = focusedIndex;
    });
    return ref.current;
}
