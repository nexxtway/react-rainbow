import { useCallback, useEffect, useRef } from 'react';
import { UP_KEY, DOWN_KEY, HOME_KEY, END_KEY, ENTER_KEY } from '../../../../libs/constants';
import getNewIndex from '../helpers/getNewIndex';
import isOptionVisible from '../../../InternalDropdown/helpers/isOptionVisible';

export default function useKeyboardNavigation(
    country,
    list,
    ref,
    scrollableRef,
    itemsRef,
    handleCountryChange,
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
                    const amount = newItem.offsetTop - currentItem.offsetTop;
                    scrollableRef.current.scrollBy(0, amount);
                }
                handleActiveChange(newIndex);
            }
        },
        [handleActiveChange, itemsRef, scrollableRef],
    );
    const handleKeyDown = useCallback(
        event => {
            if ([UP_KEY, DOWN_KEY, ENTER_KEY, HOME_KEY, END_KEY].indexOf(event.keyCode) !== -1) {
                event.preventDefault();
                const { current: active } = activeIndex;
                const keyHandlerMap = {
                    [UP_KEY]: () => moveToOption(getNewIndex(active - 1, length)),
                    [DOWN_KEY]: () => moveToOption(getNewIndex(active + 1, length)),
                    [HOME_KEY]: () => moveToOption(0),
                    [END_KEY]: () => moveToOption(length - 1),
                    [ENTER_KEY]: () => list[active] && handleCountryChange(list[active]),
                };
                keyHandlerMap[event.keyCode]();
            }
        },
        [handleCountryChange, length, list, moveToOption],
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
        if (scrollableRef.current && scrollableRef.current.scrollTo) {
            scrollableRef.current.scrollTo(0, 0);
        }
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
