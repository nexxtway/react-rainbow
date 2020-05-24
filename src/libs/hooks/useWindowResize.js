import { useEffect, useState, useCallback } from 'react';

export default function useWindowResize(handler) {
    const [isListening, setIsListening] = useState(false);

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

    const startListening = useCallback(() => setIsListening(true), [setIsListening]);
    const stopListening = useCallback(() => setIsListening(false), [setIsListening]);

    return [startListening, stopListening];
}
