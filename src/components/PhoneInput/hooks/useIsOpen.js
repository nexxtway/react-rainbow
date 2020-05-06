import { useEffect } from 'react';
import { useToggle } from '.';
import { useOutsideClick } from '../../../libs/hooks';

export default function useIsOpen(containerRef) {
    const [isOpen, toggleIsOpen] = useToggle(false);
    const [startListener, stopListener] = useOutsideClick(containerRef, () => {
        stopListener();
        toggleIsOpen(false);
    });
    useEffect(() => {
        if (isOpen) {
            startListener();
        }
    }, [isOpen, startListener]);

    return [isOpen, toggleIsOpen];
}
