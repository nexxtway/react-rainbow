import {
    UP_KEY,
    DOWN_KEY,
    ESCAPE_KEY,
    TAB_KEY,
    SPACE_KEY,
    ENTER_KEY,
} from '../../../libs/constants';
import { findCountryByIsoCode } from '../helpers';

export default function useKeyPressed(
    countries,
    isOpen,
    toggleIsOpen,
    activeIndex,
    setActiveIndex,
    focusedIndex,
    setFocusedIndex,
    handleSelect,
) {
    function handleKeyUpPressed() {
        const previewsActiveIndex = (countries.length + activeIndex - 1) % countries.length;
        if (previewsActiveIndex < activeIndex) {
            setActiveIndex(previewsActiveIndex);
        }
    }

    function handleKeyDownPressed() {
        const nextActiveIndex = (activeIndex + 1) % countries.length;
        if (nextActiveIndex > 0) {
            setActiveIndex(nextActiveIndex);
        }
    }

    function handleKeyPressed(event) {
        if (focusedIndex === 1 && event.shiftKey && event.keyCode === TAB_KEY) {
            event.preventDefault();
            return setFocusedIndex(0);
        }

        if (focusedIndex === 0) {
            if (
                [UP_KEY, DOWN_KEY, SPACE_KEY, ENTER_KEY, TAB_KEY, ESCAPE_KEY].includes(
                    event.keyCode,
                )
            ) {
                event.preventDefault();
            }

            if (event.keyCode === TAB_KEY) {
                event.preventDefault();
                return handleSelect();
            }
            if (isOpen) {
                if (event.keyCode === UP_KEY) {
                    return handleKeyUpPressed(event);
                }
                if (event.keyCode === DOWN_KEY) {
                    return handleKeyDownPressed(event);
                }
                if (event.keyCode === ESCAPE_KEY) {
                    toggleIsOpen(false);
                }
                if (event.keyCode === SPACE_KEY || event.keyCode === ENTER_KEY) {
                    const newCountry = findCountryByIsoCode(countries[activeIndex]);
                    handleSelect(newCountry);
                }
            } else if ([DOWN_KEY, SPACE_KEY, ENTER_KEY].includes(event.keyCode)) {
                event.preventDefault();
                toggleIsOpen(true);
            }
        }
        return null;
    }

    return handleKeyPressed;
}
