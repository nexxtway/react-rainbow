import { useState, useEffect } from 'react';

export default function useFocusedIndex(
    value,
    inputRef,
    triggerRef,
    isOpen,
    toggleIsOpen,
    onFocus,
) {
    const [focusedIndex, setFocusedIndex] = useState(-1);

    useEffect(() => {
        if (isOpen) {
            setFocusedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (focusedIndex === 1) {
            inputRef.current.focus();
        }
        if (focusedIndex === 0) {
            triggerRef.current.focus();
        }
    }, [focusedIndex, inputRef, triggerRef]);

    function handleFocus(event) {
        if (focusedIndex === -1) {
            onFocus(event);
        }
        if (isOpen) {
            toggleIsOpen(false);
        }
        setFocusedIndex(1);
    }
    return [focusedIndex, setFocusedIndex, handleFocus];
}
