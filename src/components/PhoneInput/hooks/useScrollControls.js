import { useState, useRef, useEffect, useCallback } from 'react';
import { isScrollPositionAtScrollable } from '../helpers';
import isOptionVisible from '../../Picklist/helpers/isOptionVisible';

export default function useScrollControls(scrollableRef) {
    const [showScrollUp, setShowScrollUp] = useState();
    const [showScrollDown, setShowScrollDown] = useState();
    const timer = useRef();

    function handleScrollScrollable() {
        setShowScrollUp(scrollableRef.current.scrollTop > 0);
        setShowScrollDown(!isScrollPositionAtScrollable(scrollableRef.current));
    }

    function stopScroll() {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }

    function handleScrollUpMouseEnter() {
        stopScroll();
        timer.current = setTimeout(function next() {
            if (scrollableRef.current.scrollTop > 0) {
                scrollableRef.current.scrollBy(0, -1);
                timer.current = setTimeout(next, 5);
            } else {
                stopScroll();
            }
        }, 5);
    }

    function handleScrollDownouseEnter() {
        stopScroll();
        timer.current = setTimeout(function next() {
            if (!isScrollPositionAtScrollable(scrollableRef.current)) {
                scrollableRef.current.scrollBy(0, 1);
                timer.current = setTimeout(next, 5);
            } else {
                stopScroll();
            }
        }, 5);
    }

    const updateScroll = useCallback(
        activeRef => {
            if (!isOptionVisible(activeRef.current, scrollableRef.current)) {
                scrollableRef.current.scrollTo(0, activeRef.current.offsetTop);
            }
        },
        [scrollableRef],
    );

    useEffect(() => handleScrollScrollable());

    return {
        showScrollUp,
        showScrollDown,
        handleScrollUpMouseEnter,
        handleScrollDownouseEnter,
        handleScrollScrollable,
        updateScroll,
        stopScroll,
    };
}
