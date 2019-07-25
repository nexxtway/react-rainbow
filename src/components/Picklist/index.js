import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, ESCAPE_KEY, TAB_KEY, ENTER_KEY } from '../../libs/constants';
import getChildrenNames from './helpers/get-children-names';
import { Provider } from './context';
import MenuContent from './menuContent';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import './styles.css';

export default class Picklist extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.triggerRef = React.createRef();
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.hoverChild = this.hoverChild.bind(this);

        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);
        this.selectOption = this.selectOption.bind(this);

        this.names = getChildrenNames(props.children);
        this.state = {
            isOpen: false,
            childrenRefs: [],
            activeOptionIndex: 0,
            activeOptionName: this.names[0],
            context: {
                privateOnClick: this.selectOption,
                privateRegisterChild: this.registerChild,
                privateUnregisterChild: this.unregisterChild,
                privateOnHover: this.hoverChild,
            },
        };

        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed.bind(this),
            [DOWN_KEY]: this.handleKeyDownPressed.bind(this),
            [ESCAPE_KEY]: this.closeMenu.bind(this),
            [TAB_KEY]: this.closeMenu.bind(this),
            [ENTER_KEY]: this.handleKeyEnterPressed.bind(this),
        };
    }

    componentDidUpdate(prevProps) {
        const { children: prevChildren } = prevProps;
        const { children } = this.props;
        if (prevChildren !== children) {
            this.names = getChildrenNames(children);
        }
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        const { className } = this.props;

        return classnames(
            'rainbow-picklist',
            {
                'rainbow-picklist--open': isOpen,
            },
            className,
        );
    }

    getInputClassNames() {
        const { icon } = this.getValue();
        return classnames('rainbow-picklist_input', {
            'rainbow-picklist_input--icon': !!icon,
        });
    }

    getDropdownClassNames() {
        const { menuAlignment, menuSize, isLoading } = this.props;
        return classnames(
            'rainbow-picklist_dropdown',
            `rainbow-picklist_dropdown--${menuAlignment}`,
            `rainbow-picklist_dropdown--${menuSize}`,
            { 'rainbow-picklist_dropdown--loading-box': isLoading },
        );
    }

    getValue() {
        const { value } = this.props;
        if (value && typeof value === 'object') {
            return value;
        }
        return {};
    }

    handleKeyUpPressed() {
        const { activeOptionIndex } = this.state;
        let nextActiveIndex;
        if (activeOptionIndex < 1) {
            nextActiveIndex = this.names.length - 1;
        } else {
            nextActiveIndex = (activeOptionIndex - 1) % this.names.length;
        }
        this.setState({
            activeOptionIndex: nextActiveIndex,
            activeOptionName: this.names[nextActiveIndex],
        });
    }

    handleKeyDownPressed() {
        const { activeOptionIndex } = this.state;
        const nextActiveIndex = (activeOptionIndex + 1) % this.names.length;
        this.setState({
            activeOptionIndex: nextActiveIndex,
            activeOptionName: this.names[nextActiveIndex],
        });
    }

    handleKeyEnterPressed() {
        const { children, onChange } = this.props;
        const { activeOptionIndex } = this.state;
        const { label, name, icon } = children[activeOptionIndex].props;
        this.closeMenu();
        return onChange({
            label,
            name,
            icon,
        });
    }

    handleKeyPressed(event) {
        const { isOpen } = this.state;
        if (isOpen) {
            if (event.keyCode === UP_KEY || event.keyCode === DOWN_KEY) event.preventDefault();
            if (this.keyHandlerMap[event.keyCode]) {
                return this.keyHandlerMap[event.keyCode]();
            }
        }
        return null;
    }

    registerChild(childRef) {
        const { childrenRefs } = this.state;
        const [...nodes] = getChildMenuItemNodes(this.containerRef.current);
        const newChildrenRefs = insertChildOrderly(childrenRefs, childRef, nodes);
        this.setState({
            childrenRefs: newChildrenRefs,
        });
    }

    unregisterChild(childRef) {
        const { childrenRefs } = this.state;
        const newChildrenRefs = childrenRefs.filter(child => child !== childRef);
        this.setState({
            childrenRefs: newChildrenRefs,
        });
    }

    hoverChild(event, name) {
        this.setState({
            activeOptionName: name,
            activeOptionIndex: this.names.indexOf(name),
        });
    }

    openMenu() {
        return this.setState({
            isOpen: true,
        });
    }

    closeMenu() {
        return this.setState({
            isOpen: false,
            activeOptionIndex: 0,
            activeOptionName: this.names[0],
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

    handleBlur(event) {
        const { onBlur } = this.props;
        this.closeMenu();
        return onBlur(event);
    }

    selectOption(event, value) {
        const { onChange } = this.props;
        return onChange(value);
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
            style,
            title,
            assistiveText,
            isLoading,
            children,
            id,
            tabIndex,
            placeholder,
            onFocus,
            name,
        } = this.props;
        const { context, activeOptionName } = this.state;
        const ariaLabel = title || assistiveText;
        const { label, icon } = this.getValue();
        const providerContext = {
            ...context,
            activeOptionName,
        };
        const value = label || '';

        return (
            <div
                id={id}
                role="presentation"
                className={this.getContainerClassNames()}
                style={style}
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}
            >
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
                        onFocus={onFocus}
                        onBlur={this.handleBlur}
                        placeholder={placeholder}
                        tabIndex={tabIndex}
                        readOnly
                        autoComplete="off"
                        ref={this.triggerRef}
                    />
                </div>
                <div role="listbox" className={this.getDropdownClassNames()}>
                    <ul role="presentation" aria-label={ariaLabel}>
                        <MenuContent isLoading={isLoading}>
                            <Provider value={providerContext}>{children}</Provider>
                        </MenuContent>
                    </ul>
                </div>
            </div>
        );
    }
}

Picklist.propTypes = {
    /** The content of the Picklist. Used to render the menuItem elements
     * when the Picklist is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The size of the menu. Options include xx-small, x-small, medium, or large.
     * This value defaults to xx-small. */
    menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Determines the alignment of the menu relative to the trigger element.
     * Available options are: left, center, right, bottom, bottom-left, bottom-right.
     * This value defaults to left. */
    menuAlignment: PropTypes.oneOf([
        'left',
        'right',
        'bottom',
        'center',
        'bottom-right',
        'bottom-left',
    ]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    value: PropTypes.object,
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
};

Picklist.defaultProps = {
    children: null,
    menuSize: 'xx-small',
    menuAlignment: 'left',
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
    className: undefined,
    style: undefined,
    id: undefined,
};
