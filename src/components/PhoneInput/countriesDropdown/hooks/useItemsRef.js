import { useRef, useEffect } from 'react';

export default function useItemsRef(length) {
    const itemsRef = useRef([]);
    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, length);
    }, [length]);

    return itemsRef;
}
