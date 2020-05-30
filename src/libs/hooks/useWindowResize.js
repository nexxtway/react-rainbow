import { useEffect, useCallback } from 'react';

export default function useWindowResize(handler, isListening = true) {
    const listener = useCallback(
        event => {
            handler(event);
        },
        [handler],
    );

    useEffect(() => {
        if (isListening) {
            window.addEventListener('resize', listener);
        }

        return () => {
            window.removeEventListener('resize', listener);
        };
    }, [isListening, listener]);
}
