import {
    UP_KEY,
    DOWN_KEY,
    ESCAPE_KEY,
    TAB_KEY,
    SPACE_KEY,
    ENTER_KEY,
} from '../../../../libs/constants';

export default function useKeyPressed(
    country,
    countries,
    inputRef,
    triggerRef,
    toggleIsOpen,
    activeIndex,
    setActiveIndex,
    isFilteredCountry,
    handleCountryChange,
) {
    function handleKeyUpPressed() {
        const step = country === countries[activeIndex - 1] ? 2 : 1;
        const previewsActiveIndex = (countries.length + activeIndex - step) % countries.length;
        if (previewsActiveIndex < activeIndex) {
            setActiveIndex(previewsActiveIndex);
        }
        if (activeIndex === 0 && isFilteredCountry) {
            setActiveIndex(-1);
        }
    }

    function handleKeyDownPressed() {
        const step = country === countries[activeIndex + 1] ? 2 : 1;
        const nextActiveIndex = (activeIndex + step) % countries.length;
        if (nextActiveIndex > 0 || activeIndex === -1) {
            setActiveIndex(nextActiveIndex);
        }
    }

    function handleKeyEscapePressed() {
        toggleIsOpen(false);
        triggerRef.current.focus();
    }
    function handleKeyTapPressed() {
        toggleIsOpen(false);
        inputRef.current.focus();
    }

    function handleCountrySelect() {
        const newCountry = countries[activeIndex];
        if (newCountry) {
            handleCountryChange(newCountry);
        }
        handleKeyTapPressed();
    }

    const keyHandlerMap = {
        [UP_KEY]: handleKeyUpPressed,
        [DOWN_KEY]: handleKeyDownPressed,
        [ESCAPE_KEY]: handleKeyEscapePressed,
        [TAB_KEY]: handleKeyTapPressed,
        [ENTER_KEY]: handleCountrySelect,
    };

    function handleKeyPressed(event) {
        if (
            [UP_KEY, DOWN_KEY, SPACE_KEY, ENTER_KEY, TAB_KEY, ESCAPE_KEY].indexOf(event.keyCode) !==
            -1
        ) {
            event.preventDefault();
        }
        if (event.shiftKey && event.keyCode === TAB_KEY) {
            return handleKeyEscapePressed();
        }
        const keyHandler = keyHandlerMap[event.keyCode];
        return keyHandler ? keyHandler() : undefined;
    }

    return handleKeyPressed;
}
