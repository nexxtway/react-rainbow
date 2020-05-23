import { useEffect, useState, useMemo } from 'react';

export default function useWindowResize(handler) {
    const [isListening, setIsListening] = useState(false);

    const listener = useMemo(() => {
        return event => {
            handler(event);
        };
    }, [handler]);

    useEffect(() => {
        if (isListening) {
            window.addEventListener('resize', listener);
        }

        return () => {
            window.removeEventListener('resize', listener);
        };
    }, [isListening, listener]);

    return [() => setIsListening(true), () => setIsListening(false)];
}
