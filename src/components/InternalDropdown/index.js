import React, {
    useState,
    useRef,
    useEffect,
    useMemo,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, SPACE_KEY, ENTER_KEY } from '../../libs/constants';
import { Provider } from './context';
import { Dropdown, Ul, Arrow } from './styled';
import Content from './content';
import isChildRegistered from './helpers/isChildRegistered';
import getChildMenuItemNodes from './helpers/getChildMenuItemNodes';
import insertChildOrderly from './helpers/insertChildOrderly';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';
import isOptionVisible from './helpers/isOptionVisible';
import getNormalizedValue from './helpers/getNormalizedValue';

const sizeMap = {
    medium: 227,
};
const preventDefaultKeys = {
    [UP_KEY]: true,
    [DOWN_KEY]: true,
    [SPACE_KEY]: true,
};

const InternalDropdown = forwardRef((props, reference) => {
    const { isLoading, children, value, onChange, id, className, style } = props;
    const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);
    const [showScrollDownArrow, setShowScrollDownArrow] = useState(false);
    const [activeOptionName, setActiveOptionName] = useState(null);
    const [activeOptionIndex, setActiveOptionIndex] = useState(0);
    const menuRef = useRef();
    const containerRef = useRef();
    const activeChildren = useRef([]);
    const scrollingTimer = useRef();
    const menuContainerStyles = {
        maxHeight: sizeMap.medium,
    };

    useImperativeHandle(reference, () => ({
        focus: () => {
            containerRef.current.focus();
        },
    }));

    const updateScrollingArrows = () => {
        const menu = menuRef.current;
        setShowScrollUpArrow(menu.scrollTop > 0);
        setShowScrollDownArrow(!isScrollPositionAtMenuBottom(menu));
    };

    const scrollTo = offset => {
        menuRef.current.scrollTo(0, offset);
    };

    const scrollBy = offset => {
        menuRef.current.scrollBy(0, offset);
    };

    useEffect(() => {
        scrollTo(0);
        updateScrollingArrows();
    }, []);

    useEffect(() => {
        const firstOptionName =
            activeChildren.current.length > 0 ? activeChildren.current[0].name : null;
        setActiveOptionName(firstOptionName);
    }, [activeChildren]);

    const registerChild = useCallback(
        (childRef, childProps) => {
            if (isChildRegistered(childRef, activeChildren.current)) return;
            const [...nodes] = getChildMenuItemNodes(containerRef.current);
            activeChildren.current = insertChildOrderly(
                activeChildren.current,
                {
                    ref: childRef,
                    ...childProps,
                },
                nodes,
            );
        },
        [containerRef],
    );

    const unregisterChild = useCallback(childRef => {
        if (!isChildRegistered(childRef, activeChildren.current)) return;
        activeChildren.current = activeChildren.current.filter(child => child.ref !== childRef);
    }, []);

    const hoverChild = useCallback((event, name) => {
        setActiveOptionName(name);
        setActiveOptionIndex(activeChildren.current.findIndex(child => child.name === name));
    }, []);

    const stopArrowScoll = () => {
        if (scrollingTimer.current) clearInterval(scrollingTimer.current);
    };

    const handleScrollUpArrowHover = () => {
        stopArrowScoll();

        const menu = menuRef.current;
        scrollingTimer.current = setInterval(() => {
            if (menu.scrollTop > 0) {
                menu.scrollBy(0, -1);
            } else {
                stopArrowScoll();
            }
        }, 5);
    };

    const handleScrollDownArrowHover = () => {
        stopArrowScoll();

        const menu = menuRef.current;
        scrollingTimer.current = setInterval(() => {
            if (!isScrollPositionAtMenuBottom(menu)) {
                menu.scrollBy(0, 1);
            } else {
                stopArrowScoll();
            }
        }, 5);
    };

    const scrollToOption = nextFocusedIndex => {
        const currentFocusedOptionRef = activeChildren.current[activeOptionIndex].ref;
        const nextFocusedOptionRef = activeChildren.current[nextFocusedIndex].ref;
        if (!isOptionVisible(nextFocusedOptionRef, menuRef.current)) {
            const amount = nextFocusedOptionRef.offsetTop - currentFocusedOptionRef.offsetTop;
            scrollBy(amount);
        }
    };

    const handleKeyUpPressed = () => {
        const nextActiveIndex =
            (activeChildren.current.length + activeOptionIndex - 1) % activeChildren.current.length;

        if (nextActiveIndex < activeOptionIndex) {
            if (nextActiveIndex === 0) {
                scrollTo(0);
            } else {
                scrollToOption(nextActiveIndex);
            }
            setActiveOptionIndex(nextActiveIndex);
            setActiveOptionName(activeChildren.current[nextActiveIndex].name);
        }
    };

    const handleKeyDownPressed = () => {
        const nextActiveIndex = (activeOptionIndex + 1) % activeChildren.current.length;
        if (nextActiveIndex > 0) {
            scrollToOption(nextActiveIndex);
            setActiveOptionIndex(nextActiveIndex);
            setActiveOptionName(activeChildren.current[nextActiveIndex].name);
        }
    };

    const handleKeyEnterPressed = () => {
        const { ref, ...rest } = activeChildren.current[activeOptionIndex];
        return onChange(rest);
    };

    const keyHandlerMap = {
        [UP_KEY]: handleKeyUpPressed,
        [DOWN_KEY]: handleKeyDownPressed,
        [ENTER_KEY]: handleKeyEnterPressed,
    };

    const handleKeyPressed = event => {
        if (preventDefaultKeys[event.keyCode]) event.preventDefault();
        if (keyHandlerMap[event.keyCode]) {
            keyHandlerMap[event.keyCode]();
        }
    };

    const context = useMemo(() => {
        const { name } = getNormalizedValue(value);
        return {
            privateOnClick: (event, option) => onChange(option),
            privateRegisterChild: registerChild,
            privateUnregisterChild: unregisterChild,
            privateOnHover: hoverChild,
            activeOptionName,
            currentValueName: name,
        };
    }, [activeOptionName, hoverChild, onChange, registerChild, unregisterChild, value]);

    return (
        <Dropdown
            id={id}
            role="listbox"
            isLoading={isLoading}
            className={className}
            style={style}
            onKeyDown={handleKeyPressed}
            tabIndex="-1"
            ref={containerRef}
        >
            <RenderIf isTrue={showScrollUpArrow}>
                <Arrow
                    data-id="internal-dropdown-arrow-up"
                    direction="up"
                    onMouseEnter={handleScrollUpArrowHover}
                    onMouseLeave={stopArrowScoll}
                />
            </RenderIf>
            <Ul
                role="presentation"
                onScroll={updateScrollingArrows}
                ref={menuRef}
                style={menuContainerStyles}
            >
                <Content isLoading={isLoading}>
                    <Provider value={context}>{children}</Provider>
                </Content>
            </Ul>
            <RenderIf isTrue={showScrollDownArrow}>
                <Arrow
                    data-id="internal-dropdown-arrow-down"
                    direction="down"
                    onMouseEnter={handleScrollDownArrowHover}
                    onMouseLeave={stopArrowScoll}
                />
            </RenderIf>
        </Dropdown>
    );
});

InternalDropdown.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** The content of the InternalDropdown. Used to render the options
     * passed. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** Specifies the selected value of the InternalDropdown. Must have a name which identifies de selected option.
     * Also it can have whatever other key value pairs you want.
     */
    value: PropTypes.shape({
        name: PropTypes.string,
    }),
    /**  The action triggered when click/select an option. */
    onChange: PropTypes.func,
};

InternalDropdown.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    isLoading: false,
    children: null,
    value: undefined,
    onChange: () => {},
};

export default InternalDropdown;
