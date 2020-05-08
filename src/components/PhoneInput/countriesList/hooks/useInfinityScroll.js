import { useCallback, useState, useEffect } from 'react';

export default function useInfinityScroll(children, delta, height) {
    const [infinityChildren, setInfinityChildren] = useState();
    const handleScroll = useCallback(
        event => {
            const scrollTop = event ? event.target.scrollTop : 0;
            const index = scrollTop / height;
            setInfinityChildren(children.slice(0, index + delta));
        },
        [children, delta, height],
    );

    useEffect(() => {
        handleScroll();
    }, [handleScroll]);

    return [infinityChildren, handleScroll];
}
