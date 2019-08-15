import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, ESCAPE_KEY, TAB_KEY, ENTER_KEY } from '../../libs/constants';
import { Provider } from './context';
import MenuContent from './menuContent';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import './styles.css';
import isEmpty from './helpers/isEmpty';

class Picklist extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.triggerRef = React.createRef();
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.hoverChild = this.hoverChild.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.selectOption = this.selectOption.bind(this);

        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);

        this.currentOption = null;
        this.activeChildren = [];
        this.state = {
            isOpen: false,
            childrenRefs: [],
            activeOptionIndex: -1,
            activeOptionName: null,
            context: {
                privateOnClick: this.handleOptionClick,
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
        const { value: prevValue } = prevProps;
        const { value } = this.props;
        if (prevValue !== value) {
            this.selectOption(value);
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
        const { activeOptionIndex } = this.state;
        let nextActiveIndex;
        if (activeOptionIndex < 1) {
            nextActiveIndex = this.activeChildren.length - 1;
        } else {
            nextActiveIndex = (activeOptionIndex - 1) % this.activeChildren.length;
        }
        this.setState({
            activeOptionIndex: nextActiveIndex,
            activeOptionName: this.activeChildren[nextActiveIndex].name,
        });
    }

    handleKeyDownPressed() {
        const { activeOptionIndex } = this.state;
        const nextActiveIndex = (activeOptionIndex + 1) % this.activeChildren.length;
        this.setState({
            activeOptionIndex: nextActiveIndex,
            activeOptionName: this.activeChildren[nextActiveIndex].name,
        });
    }

    handleKeyEnterPressed() {
        const { onChange } = this.props;
        const { activeOptionIndex } = this.state;
        const { label, name, icon, value } = this.activeChildren[activeOptionIndex];
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
            if (event.keyCode === UP_KEY || event.keyCode === DOWN_KEY) event.preventDefault();
            if (this.keyHandlerMap[event.keyCode]) {
                return this.keyHandlerMap[event.keyCode]();
            }
        }
        return null;
    }

    registerChild(childRef, childProps) {
        const { childrenRefs } = this.state;
        const [...nodes] = getChildMenuItemNodes(this.containerRef.current);
        const newChildrenRefs = insertChildOrderly(childrenRefs, childRef, nodes);
        const refIndex = newChildrenRefs.indexOf(childRef);
        const extendedChildProps = {
            ...childProps,
            ref: childRef,
        };
        const { value } = this.props;
        if (!isEmpty(value)) {
            if (isEmpty(this.currentOption) && childProps.name === value.name) {
                this.currentOption = {
                    index: refIndex,
                    optionProps: extendedChildProps,
                };
            } else if (!isEmpty(this.currentOption)) {
                const { index, optionProps } = this.currentOption;
                this.activeChildren.splice(index, 0, optionProps);
                this.activeChildren.splice(refIndex, 0, extendedChildProps);
                const currentOptionIndex = this.activeChildren.findIndex(
                    child => child.name === value.name,
                );
                this.currentOption = {
                    index: currentOptionIndex,
                    optionProps: this.activeChildren[currentOptionIndex],
                };
                this.activeChildren.splice(currentOptionIndex, 1);
            } else {
                this.activeChildren.splice(refIndex, 0, extendedChildProps);
            }
        } else {
            this.activeChildren.splice(refIndex, 0, extendedChildProps);
        }

        this.setState({
            childrenRefs: newChildrenRefs,
        });
    }

    unregisterChild(childRef) {
        const { childrenRefs } = this.state;
        const refIndex = childrenRefs.indexOf(childRef);
        const newChildrenRefs = childrenRefs.filter(child => child !== childRef);

        if (!isEmpty(this.currentOption)) {
            const { index, optionProps } = this.currentOption;
            this.activeChildren.splice(index, 0, optionProps);
            this.activeChildren.splice(refIndex, 1);

            const newIndex = newChildrenRefs.indexOf(optionProps.ref);
            this.currentOption.index = newIndex;
            this.activeChildren.splice(newIndex, 1);
        } else {
            this.activeChildren.splice(refIndex, 1);
        }

        this.setState({
            childrenRefs: newChildrenRefs,
        });
    }

    hoverChild(event, name) {
        this.setState({
            activeOptionName: name,
            activeOptionIndex: this.activeChildren.findIndex(child => child.name === name),
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
            activeOptionName: this.activeChildren[0].name,
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

    handleOptionClick(event, option) {
        const { onChange } = this.props;
        return onChange(option);
    }

    selectOption(option) {
        const { childrenRefs } = this.state;

        if (!isEmpty(this.currentOption)) {
            const { optionProps } = this.currentOption;
            const realIndex = childrenRefs.findIndex(childRef => childRef === optionProps.ref);
            this.activeChildren.splice(realIndex, 0, optionProps);
        }

        if (!isEmpty(option)) {
            const currentOptionIndex = this.activeChildren.findIndex(
                child => child.name === option.name,
            );
            this.currentOption = {
                index: currentOptionIndex,
                optionProps: this.activeChildren[currentOptionIndex],
            };
            this.activeChildren.splice(currentOptionIndex, 1);
        } else {
            this.currentOption = null;
        }
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
        const { label, icon, name: currentValueName } = this.getValue();
        const providerContext = {
            ...context,
            activeOptionName,
            currentValueName,
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
export default withReduxForm(Picklist);
