import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, ESCAPE_KEY, TAB_KEY, SPACE_KEY, ENTER_KEY } from '../../libs/constants';
import { Provider } from './context';
import MenuContent from './menuContent';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import Label from './label';
import './styles.css';
import { uniqueId } from '../../libs/utils';
import MenuArrowButton from './menuArrowButton';
import isOptionVisible from './helpers/isOptionVisible';

const sizeMap = {
    small: 135,
    medium: 225,
    large: 360,
};

class Picklist extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('picklist-input');
        this.containerRef = React.createRef();
        this.triggerRef = React.createRef();
        this.menuRef = React.createRef();
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.hoverChild = this.hoverChild.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollUpArrowHover = this.handleScrollUpArrowHover.bind(this);
        this.handleScrollDownArrowHover = this.handleScrollDownArrowHover.bind(this);
        this.handleStopArrowScoll = this.handleStopArrowScoll.bind(this);

        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);

        this.state = {
            isOpen: false,
            activeChildren: [],
            activeOptionIndex: -1,
            activeOptionName: null,
            showScrollUpArrow: undefined,
            showScrollDownArrow: undefined,
        };

        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed.bind(this),
            [DOWN_KEY]: this.handleKeyDownPressed.bind(this),
            [ESCAPE_KEY]: this.closeMenu.bind(this),
            [TAB_KEY]: this.closeMenu.bind(this),
            [ENTER_KEY]: this.handleKeyEnterPressed.bind(this),
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { isOpen: wasOpen } = prevState;
        const { isOpen } = this.state;
        if (!wasOpen && isOpen) {
            this.scrollTo(0);
            this.updateScrollingArrows();
        }
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        const { className, readOnly } = this.props;

        return classnames(
            'rainbow-picklist',
            {
                'rainbow-picklist--readonly': readOnly,
                'rainbow-picklist--open': isOpen,
            },
            className,
        );
    }

    getContext() {
        const { activeOptionName } = this.state;
        const { name } = this.getValue();
        return {
            privateOnClick: this.handleOptionClick,
            privateRegisterChild: this.registerChild,
            privateUnregisterChild: this.unregisterChild,
            privateOnHover: this.hoverChild,
            activeOptionName,
            currentValueName: name,
        };
    }

    // eslint-disable-next-line class-methods-use-this
    getMenuMaxHeight() {
        return sizeMap.medium;
    }

    getInputClassNames() {
        const { icon } = this.getValue();
        return classnames('rainbow-picklist_input', {
            'rainbow-picklist_input--icon': !!icon,
        });
    }

    getDropdownClassNames() {
        const { isLoading } = this.props;
        return classnames('rainbow-picklist_dropdown', {
            'rainbow-picklist_dropdown--loading-box': isLoading,
        });
    }

    getValue() {
        const { value } = this.props;
        if (value && typeof value === 'object') {
            return value;
        }
        return {};
    }

    handleKeyUpPressed() {
        const { activeChildren, activeOptionIndex } = this.state;
        const nextActiveIndex =
            (activeChildren.length + activeOptionIndex - 1) % activeChildren.length;

        if (nextActiveIndex < activeOptionIndex) {
            this.setState({
                activeOptionIndex: nextActiveIndex,
                activeOptionName: activeChildren[nextActiveIndex].name,
            });

            if (nextActiveIndex === 0) {
                this.scrollTo(0);
            } else {
                this.scrollToOption(nextActiveIndex);
            }
        }
    }

    handleKeyDownPressed() {
        const { activeChildren, activeOptionIndex } = this.state;
        const nextActiveIndex = (activeOptionIndex + 1) % activeChildren.length;
        if (nextActiveIndex > 0) {
            this.setState({
                activeOptionIndex: nextActiveIndex,
                activeOptionName: activeChildren[nextActiveIndex].name,
            });
            this.scrollToOption(nextActiveIndex);
        }
    }

    handleKeyEnterPressed() {
        const { onChange } = this.props;
        const { activeChildren, activeOptionIndex } = this.state;
        const { label, name, icon, value } = activeChildren[activeOptionIndex];
        this.closeMenu();
        return onChange({
            label,
            name,
            icon,
            value,
        });
    }

    handleKeyPressed(event) {
        const { isOpen } = this.state;
        if (isOpen) {
            if ([UP_KEY, DOWN_KEY, SPACE_KEY].includes(event.keyCode)) event.preventDefault();
            if (this.keyHandlerMap[event.keyCode]) {
                return this.keyHandlerMap[event.keyCode]();
            }
        } else if ([UP_KEY, DOWN_KEY, SPACE_KEY, ENTER_KEY].includes(event.keyCode)) {
            if (event.keyCode === ESCAPE_KEY) {
                event.preventDefault();
            }
            this.openMenu();
        }
        return null;
    }

    isChildRegistered(childRef) {
        const { activeChildren } = this.state;
        return activeChildren.findIndex(child => child.ref === childRef) !== -1;
    }

    registerChild(childRef, childProps) {
        if (this.isChildRegistered(childRef)) return;

        const { activeChildren } = this.state;
        const [...nodes] = getChildMenuItemNodes(this.containerRef.current);
        const newActiveChildren = insertChildOrderly(
            activeChildren,
            {
                ref: childRef,
                ...childProps,
            },
            nodes,
        );
        this.setState({
            activeChildren: newActiveChildren,
        });
    }

    unregisterChild(childRef) {
        if (!this.isChildRegistered(childRef)) return;
        const { activeChildren } = this.state;
        const newActiveChildren = activeChildren.filter(child => child.ref !== childRef);
        this.setState({
            activeChildren: newActiveChildren,
        });
    }

    hoverChild(event, name) {
        const { activeChildren } = this.state;
        this.setState({
            activeOptionName: name,
            activeOptionIndex: activeChildren.findIndex(child => child.name === name),
        });
    }

    openMenu() {
        const { activeChildren } = this.state;
        const firstOptionIndex = activeChildren.length > 0 ? 0 : -1;
        const firstOptionName = activeChildren.length > 0 ? activeChildren[0].name : null;

        return this.setState({
            isOpen: true,
            activeOptionIndex: firstOptionIndex,
            activeOptionName: firstOptionName,
        });
    }

    closeMenu() {
        return this.setState({
            isOpen: false,
            activeOptionIndex: -1,
            activeOptionName: null,
        });
    }

    handleInputClick(event) {
        const { onClick } = this.props;
        const { isOpen } = this.state;
        onClick(event);
        if (isOpen) {
            return this.closeMenu();
        }
        return this.openMenu();
    }

    handleFocus() {
        const { onFocus, value } = this.props;
        const eventValue = value || null;
        onFocus(eventValue);
    }

    handleBlur() {
        const { onBlur, value } = this.props;
        this.closeMenu();
        const eventValue = value || null;
        onBlur(eventValue);
    }

    handleOptionClick(event, option) {
        const { onChange } = this.props;
        return onChange(option);
    }

    scrollToOption(nextFocusedIndex) {
        const { activeChildren } = this.state;
        const nextFocusedOptionRef = activeChildren[nextFocusedIndex].ref;
        if (!isOptionVisible(nextFocusedOptionRef, this.menuRef.current)) {
            this.scrollTo(nextFocusedOptionRef.offsetTop);
        }
    }

    scrollTo(offset) {
        this.menuRef.current.scrollTo(0, offset);
    }

    updateScrollingArrows() {
        const menu = this.menuRef.current;
        const showScrollUpArrow = menu.scrollTop > 0;
        const showScrollDownArrow = menu.scrollHeight - menu.scrollTop !== menu.clientHeight;
        this.setState({
            showScrollUpArrow,
            showScrollDownArrow,
        });
    }

    handleScroll() {
        this.updateScrollingArrows();
    }

    handleScrollUpArrowHover() {
        if (this.scrollingTimer) clearInterval(this.scrollingTimer);

        const menu = this.menuRef.current;
        this.scrollingTimer = setInterval(() => {
            if (menu.scrollTop > 0) {
                menu.scrollBy(0, -45);
            } else {
                clearInterval(this.scrollingTimer);
            }
        }, 400);
    }

    handleScrollDownArrowHover() {
        if (this.scrollingTimer) clearInterval(this.scrollingTimer);

        const menu = this.menuRef.current;
        this.scrollingTimer = setInterval(() => {
            if (menu.scrollHeight - menu.scrollTop !== menu.clientHeight) {
                menu.scrollBy(0, 45);
            } else {
                clearInterval(this.scrollingTimer);
            }
        }, 400);
    }

    handleStopArrowScoll() {
        if (this.scrollingTimer) clearInterval(this.scrollingTimer);
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.triggerRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.triggerRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.triggerRef.current.blur();
    }

    render() {
        const {
            label: pickListLabel,
            hideLabel,
            style,
            title,
            assistiveText,
            isLoading,
            disabled,
            readOnly,
            required,
            children,
            id,
            tabIndex,
            placeholder,
            name,
        } = this.props;
        const ariaLabel = title || assistiveText;
        const { label: valueLabel, icon } = this.getValue();
        const value = valueLabel || '';

        const menuContainerStyles = {
            maxHeight: this.getMenuMaxHeight(),
        };

        const { showScrollUpArrow, showScrollDownArrow } = this.state;
        return (
            <div
                id={id}
                role="presentation"
                className={this.getContainerClassNames()}
                style={style}
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}
            >
                <RenderIf isTrue={!!pickListLabel}>
                    <Label
                        label={pickListLabel}
                        hideLabel={hideLabel}
                        required={required}
                        inputId={this.inputId}
                        readOnly={readOnly}
                    />
                </RenderIf>

                <div className="rainbow-picklist_inner-container">
                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-picklist_icon">{icon}</span>
                    </RenderIf>
                    <input
                        className={this.getInputClassNames()}
                        id={this.inputId}
                        type="text"
                        name={name}
                        value={value}
                        onClick={this.handleInputClick}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        placeholder={placeholder}
                        tabIndex={tabIndex}
                        readOnly
                        disabled={disabled}
                        required={required}
                        autoComplete="off"
                        ref={this.triggerRef}
                    />
                </div>
                <div role="listbox" className={this.getDropdownClassNames()}>
                    <RenderIf isTrue={showScrollUpArrow}>
                        <MenuArrowButton
                            arrow="up"
                            onMouseEnter={this.handleScrollUpArrowHover}
                            onMouseLeave={this.handleStopArrowScoll}
                        />
                    </RenderIf>
                    <ul
                        role="presentation"
                        onScroll={this.handleScroll}
                        aria-label={ariaLabel}
                        ref={this.menuRef}
                        style={menuContainerStyles}
                    >
                        <MenuContent isLoading={isLoading}>
                            <Provider value={this.getContext()}>{children}</Provider>
                        </MenuContent>
                    </ul>
                    <RenderIf isTrue={showScrollDownArrow}>
                        <MenuArrowButton
                            arrow="down"
                            onMouseEnter={this.handleScrollDownArrowHover}
                            onMouseLeave={this.handleStopArrowScoll}
                        />
                    </RenderIf>
                </div>
            </div>
        );
    }
}

Picklist.propTypes = {
    /** Text label for the PickList. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the PickList label. */
    hideLabel: PropTypes.bool,
    /** The content of the Picklist. Used to render the menuItem elements
     * when the Picklist is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    tabIndex: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies that an option must be selected before submitting the form. This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the PickList element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that the PickList is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
};

Picklist.defaultProps = {
    children: null,
    isLoading: false,
    title: undefined,
    assistiveText: undefined,
    value: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
    placeholder: undefined,
    name: undefined,
    hideLabel: false,
    className: undefined,
    style: undefined,
    id: undefined,
    disabled: false,
    readOnly: false,
    required: false,
};

export default withReduxForm(Picklist);
