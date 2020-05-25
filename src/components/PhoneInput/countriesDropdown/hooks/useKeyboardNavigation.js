import { useCallback, useEffect, useRef } from 'react';
import {
    UP_KEY,
    DOWN_KEY,
    HOME_KEY,
    END_KEY,
    ENTER_KEY,
    ESCAPE_KEY,
    TAB_KEY,
} from '../../../../libs/constants';
import getNewIndex from '../helpers/getNewIndex';
import isOptionVisible from '../../../Picklist/helpers/isOptionVisible';
import calculateScrollOffset from '../../../Picklist/helpers/calculateScrollOffset';

export default function useKeyboardNavigation(
    country,
    list,
    ref,
    scrollableRef,
    itemsRef,
    handleCountryChange,
    setFocusIndex,
) {
    const activeIndex = useRef(0);
    const { length } = list;
    const handleActiveChange = useCallback(
        newIndex => {
            const currentItem = itemsRef.current[activeIndex.current];
            const newItem = itemsRef.current[newIndex];
            if (currentItem) {
                currentItem.setAttribute('aria-selected', false);
            }
            if (newItem) {
                itemsRef.current[newIndex].setAttribute('aria-selected', true);
                activeIndex.current = newIndex;
            }
        },
        [itemsRef],
    );
    const moveToOption = useCallback(
        newIndex => {
            const currentItem = itemsRef.current[activeIndex.current];
            const newItem = itemsRef.current[newIndex];
            if (currentItem && newItem) {
                if (!isOptionVisible(newItem, scrollableRef.current)) {
                    const amount = calculateScrollOffset(currentItem.offsetTop, newItem.offsetTop);
                    scrollableRef.current.scrollBy(0, amount);
                }
                handleActiveChange(newIndex);
            }
        },
        [handleActiveChange, itemsRef, scrollableRef],
    );
    const handleKeyDown = useCallback(
        event => {
            if (
                [UP_KEY, DOWN_KEY, ENTER_KEY, HOME_KEY, END_KEY, ESCAPE_KEY, TAB_KEY].indexOf(
                    event.keyCode,
                ) !== -1
            ) {
                event.preventDefault();
                const { current: active } = activeIndex;
                const keyHandlerMap = {
                    [UP_KEY]: () => moveToOption(getNewIndex(active - 1, length)),
                    [DOWN_KEY]: () => moveToOption(getNewIndex(active + 1, length)),
                    [HOME_KEY]: () => moveToOption(0),
                    [END_KEY]: () => moveToOption(length - 1),
                    [ENTER_KEY]: () => handleCountryChange(list[active]),
                    [ESCAPE_KEY]: () => setFocusIndex(0),
                    [TAB_KEY]: () => setFocusIndex(2),
                };
                keyHandlerMap[event.keyCode]();
            }
        },
        [handleCountryChange, length, list, moveToOption, setFocusIndex],
    );

    useEffect(() => {
        const element = ref.current || window;
        element.addEventListener('keydown', handleKeyDown);
        return () => {
            element.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, ref]);

    useEffect(() => {
        handleActiveChange(0);
        scrollableRef.current.scrollTo(0, 0);
        activeIndex.current = 0;
    }, [country, handleActiveChange, itemsRef, length, scrollableRef]);

    useEffect(() => {
        const currentItem = itemsRef.current[activeIndex.current];
        if (currentItem) {
            currentItem.setAttribute('aria-selected', true);
        }
    });

    return handleActiveChange;
}
