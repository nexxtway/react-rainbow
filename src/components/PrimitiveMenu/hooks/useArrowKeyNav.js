import { useState, useMemo, useCallback } from 'react';
import { UP_KEY, DOWN_KEY, ENTER_KEY } from '../../../libs/constants';
import { findItemIndex, isPrintableCharacter, findItemByKey } from '../utils';

export default function useArrowKeyNav({ childrenRefs, isLoading }) {
    const [focusedChildIndex, setFocusedChildIndex] = useState(null);

    const focusChild = useCallback(
        index => {
            if (isLoading || !childrenRefs[index]) {
                return null;
            }
            setFocusedChildIndex(index);
            return childrenRefs[index].focus();
        },
        [childrenRefs, isLoading],
    );

    const focusMatchedItem = useCallback(
        matchedItem => {
            const itemIndex = findItemIndex(childrenRefs, matchedItem);
            return focusChild(itemIndex);
        },
        [childrenRefs, focusChild],
    );

    const clearFocusedChild = useCallback(() => setFocusedChildIndex(null), [setFocusedChildIndex]);

    const keyHandlerMap = useMemo(
        () => ({
            [UP_KEY]: () => {
                if (focusedChildIndex > 0) {
                    setFocusedChildIndex(focusedChildIndex - 1);
                }
            },
            [DOWN_KEY]: () => {
                if (focusedChildIndex < childrenRefs.length - 1) {
                    setFocusedChildIndex(focusedChildIndex + 1);
                }
            },
            [ENTER_KEY]: () => {
                const isValidIndex = focusedChildIndex >= 0;
                if (isValidIndex) {
                    childrenRefs[focusedChildIndex].click();
                }
            },
        }),
        [childrenRefs, focusedChildIndex],
    );

    const processPrintableCharacter = useCallback(
        char => {
            const matchedItem = findItemByKey(char, childrenRefs, focusedChildIndex);
            if (matchedItem) {
                focusMatchedItem(matchedItem);
            }
        },
        [childrenRefs, focusMatchedItem, focusedChildIndex],
    );

    const handleKeyPress = useCallback(
        event => {
            const { keyCode, key } = event;
            if (keyHandlerMap[keyCode]) {
                keyHandlerMap[keyCode]();
            } else if (isPrintableCharacter(key)) {
                processPrintableCharacter(key);
            }
        },
        [keyHandlerMap, processPrintableCharacter],
    );

    return {
        focusedChildIndex,
        handleKeyPress,
        focusMatchedItem,
        focusChild,
        clearFocusedChild,
    };
}
