import { useState, useRef, useEffect, useCallback } from 'react';
import { isScrollPositionAtScrollable } from '../helpers';

export default function useScrollControls(scrollableRef) {
    const [showScrollUp, setShowScrollUp] = useState();
    const [showScrollDown, setShowScrollDown] = useState();
    const timer = useRef();

    const handleScrollScrollable = useCallback(() => {
        setShowScrollUp(scrollableRef.current.scrollTop > 0);
        setShowScrollDown(!isScrollPositionAtScrollable(scrollableRef.current));
    }, [scrollableRef]);

    const stopScroll = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }, []);

    const handleScrollUpMouseEnter = useCallback(() => {
        stopScroll();
        timer.current = setTimeout(function next() {
            if (scrollableRef.current.scrollTop > 0) {
                scrollableRef.current.scrollBy(0, -1);
                timer.current = setTimeout(next, 5);
            } else {
                stopScroll();
            }
        }, 5);
    }, [scrollableRef, stopScroll]);

    const handleScrollDownouseEnter = useCallback(() => {
        stopScroll();
        timer.current = setTimeout(function next() {
            if (!isScrollPositionAtScrollable(scrollableRef.current)) {
                scrollableRef.current.scrollBy(0, 1);
                timer.current = setTimeout(next, 5);
            } else {
                stopScroll();
            }
        }, 5);
    }, [scrollableRef, stopScroll]);

    useEffect(() => {
        const scrollable = scrollableRef.current;

        scrollable.addEventListener('scroll', handleScrollScrollable);

        return () => {
            scrollable.removeEventListener('scroll', handleScrollScrollable);
        };
    }, [
        handleScrollDownouseEnter,
        handleScrollScrollable,
        handleScrollUpMouseEnter,
        scrollableRef,
        stopScroll,
    ]);

    useEffect(() => handleScrollScrollable());

    return {
        showScrollUp,
        showScrollDown,
        handleScrollUpMouseEnter,
        handleScrollDownouseEnter,
        stopScroll,
    };
}
