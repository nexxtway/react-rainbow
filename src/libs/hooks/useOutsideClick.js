import { useEffect, useState, useCallback } from 'react';

export default function useOutsideClick(ref, handler) {
    const [isListening, setIsListening] = useState(false);

    const listener = useCallback(
        event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        },
        [ref, handler],
    );

    useEffect(() => {
        if (isListening) {
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
        }

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [isListening, listener]);

    const startListener = useCallback(() => setIsListening(true), []);
    const stopListener = useCallback(() => setIsListening(false), []);

    return [startListener, stopListener];
}
