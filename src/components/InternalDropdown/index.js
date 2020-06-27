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
import Content from './content';
import isChildRegistered from './helpers/isChildRegistered';
import getChildMenuItemNodes from './helpers/getChildMenuItemNodes';
import insertChildOrderly from './helpers/insertChildOrderly';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';
import isOptionVisible from './helpers/isOptionVisible';
import scrollTo from './helpers/scrollTo';
import searchFilter from './helpers/searchFilter';
import getValueNames from './helpers/getValueNames';
import isEmptyObject from './helpers/isEmptyObject';
import EmptyMessage from './emptyMessage';
import { Dropdown, Ul, Arrow, InputSearch, UlContainer, SearchContainer, Icon } from './styled';

const sizeMap = {
    medium: 227,
};
const preventDefaultKeys = {
    [UP_KEY]: true,
    [DOWN_KEY]: true,
};
const menuContainerStyles = {
    maxHeight: sizeMap.medium,
};

/**
 * @category Internal
 */
const InternalDropdown = forwardRef((props, reference) => {
    const {
        isLoading,
        children,
        value,
        onChange,
        enableSearch,
        id,
        className,
        style,
        multiple,
    } = props;
    const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);
    const [showScrollDownArrow, setShowScrollDownArrow] = useState(false);
    const [activeOptionName, setActiveOptionName] = useState(null);
    const [activeOptionIndex, setActiveOptionIndex] = useState(0);
    const [activeChildrenMap, setActiveChildrenMap] = useState();
    const [searchValue, setSearchValue] = useState('');
    const activeChildren = useRef([]);
    const allActiveChildren = useRef();
    const firstChild = useRef();
    const menuRef = useRef();
    const containerRef = useRef();
    const scrollingTimer = useRef();
    const searchRef = useRef();
    const showEmptyMessage = isEmptyObject(activeChildrenMap);

    useImperativeHandle(reference, () => ({
        focus: () => {
            if (enableSearch) {
                return searchRef.current.focus();
            }
            return containerRef.current.focus();
        },
        contains: element => containerRef.current.contains(element),
    }));

    const updateScrollingArrows = () => {
        const menu = menuRef.current;
        setShowScrollUpArrow(menu.scrollTop > 0);
        setShowScrollDownArrow(!isScrollPositionAtMenuBottom(menu));
    };

    const scrollBy = offset => {
        menuRef.current.scrollBy(0, offset);
    };

    useEffect(() => {
        scrollTo(menuRef, 0);
        updateScrollingArrows();
    }, []);

    const registerChild = useCallback((childRef, childProps) => {
        if (isChildRegistered(childProps.name, activeChildren.current)) return;
        if (!firstChild.current) {
            firstChild.current = childProps;
            setActiveOptionName(childProps.name);
        }
        const [...nodes] = getChildMenuItemNodes(containerRef.current);
        const newChildren = insertChildOrderly(
            activeChildren.current,
            {
                ref: childRef,
                ...childProps,
            },
            nodes,
        );
        activeChildren.current = newChildren;
    }, []);

    const unregisterChild = useCallback((childRef, name) => {
        if (!isChildRegistered(name, activeChildren.current)) return;
        const newChildren = activeChildren.current.filter(child => child.name !== name);
        activeChildren.current = newChildren;
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

    const handleChange = useCallback(
        option => {
            const { name } = option;
            if (multiple) {
                if (Array.isArray(value)) {
                    if (value.some(v => v.name === name)) {
                        return null;
                    }
                    return onChange(value.concat([option]));
                }
                if (value) {
                    return onChange([value, option]);
                }
                return onChange([option]);
            }
            return onChange(option);
        },
        [multiple, value, onChange],
    );

    const handleKeyUpPressed = () => {
        const nextActiveIndex =
            (activeChildren.current.length + activeOptionIndex - 1) % activeChildren.current.length;

        if (nextActiveIndex < activeOptionIndex) {
            if (nextActiveIndex === 0) {
                scrollTo(menuRef, 0);
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
        return handleChange(rest);
    };

    const keyHandlerMap = {
        [UP_KEY]: handleKeyUpPressed,
        [DOWN_KEY]: handleKeyDownPressed,
        [ENTER_KEY]: handleKeyEnterPressed,
    };

    const handleKeyPressed = event => {
        if (event.keyCode === SPACE_KEY && !enableSearch) {
            event.preventDefault();
        }
        if (preventDefaultKeys[event.keyCode]) event.preventDefault();
        if (keyHandlerMap[event.keyCode]) {
            keyHandlerMap[event.keyCode]();
        }
    };

    const handleSearch = event => {
        if (!allActiveChildren.current) {
            allActiveChildren.current = [...activeChildren.current];
        }
        const filteredOptions = searchFilter({
            query: event.target.value,
            data: allActiveChildren.current,
        });

        setSearchValue(event.target.value);

        setActiveChildrenMap(
            filteredOptions.reduce((acc, option) => {
                acc[option.name] = true;
                return acc;
            }, {}),
        );
        setActiveOptionIndex(0);
        const firstActiveChild = activeChildren.current[0];
        if (firstActiveChild) {
            setActiveOptionName(firstActiveChild.name);
        }
        setTimeout(() => updateScrollingArrows(), 0);
    };

    const context = useMemo(() => {
        const currentValues = getValueNames(value);
        return {
            privateOnClick: (event, option) => handleChange(option),
            privateRegisterChild: registerChild,
            privateUnregisterChild: unregisterChild,
            privateOnHover: hoverChild,
            activeOptionName,
            currentValues,
            activeChildrenMap,
        };
    }, [
        value,
        registerChild,
        unregisterChild,
        hoverChild,
        activeOptionName,
        activeChildrenMap,
        handleChange,
    ]);

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
            <RenderIf isTrue={enableSearch}>
                <SearchContainer>
                    <Icon />
                    <InputSearch onChange={handleSearch} ref={searchRef} type="search" />
                </SearchContainer>
            </RenderIf>
            <UlContainer>
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
                    showEmptyMessage={showEmptyMessage}
                >
                    <Content isLoading={isLoading}>
                        <Provider value={context}>{children}</Provider>
                    </Content>
                </Ul>
                <RenderIf isTrue={showEmptyMessage}>
                    <EmptyMessage searchValue={searchValue} />
                </RenderIf>
                <RenderIf isTrue={showScrollDownArrow}>
                    <Arrow
                        data-id="internal-dropdown-arrow-down"
                        direction="down"
                        onMouseEnter={handleScrollDownArrowHover}
                        onMouseLeave={stopArrowScoll}
                    />
                </RenderIf>
            </UlContainer>
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
    value: PropTypes.oneOfType([
        PropTypes.shape({
            name: PropTypes.string,
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            }),
        ),
    ]),
    /** The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** If is set to true, then a search input to filter is showed. */
    enableSearch: PropTypes.bool,
    /** Specifies that multiple items can be selected */
    multiple: PropTypes.bool,
};

InternalDropdown.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    isLoading: false,
    children: null,
    value: undefined,
    onChange: () => {},
    enableSearch: false,
    multiple: false,
};

export default InternalDropdown;
