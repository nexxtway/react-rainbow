import { useState, useCallback } from 'react';

export default function useDisclosure(defaultIsOpen) {
    const [isOpen, setIsOpen] = useState(Boolean(defaultIsOpen));
    const close = useCallback(() => setIsOpen(false), []);
    const open = useCallback(() => setIsOpen(true), []);
    const toggle = useCallback(() => setIsOpen(prevIsOpen => !prevIsOpen), []);
    return { isOpen, open, close, toggle };
}
