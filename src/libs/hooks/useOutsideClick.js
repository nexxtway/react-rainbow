import { useEffect, useState, useMemo } from 'react';

export default function useOutsideClick(ref, handler) {
    const [isListening, setIsListening] = useState(false);

    const listener = useMemo(() => {
        return event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };
    }, [ref, handler]);

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

    return [() => setIsListening(true), () => setIsListening(false)];
}
