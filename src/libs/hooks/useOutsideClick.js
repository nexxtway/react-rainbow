import { useEffect, useCallback } from 'react';

/**
 * This component implements the positioning of a component (inserted in the DOM at the body level) based on a trigger DOM element. By the way of example, you can think of the use case of a Menu Options, Tooltip, Popup that should be floating on top of all the elements and it should be correctly positioned based on the component/element that triggers the show/open action.
 * @category Internal
 */
export default function useOutsideClick(ref, handler, isListening = true) {
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
}
