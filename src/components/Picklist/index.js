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

class Picklist extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('picklist-input');
        this.containerRef = React.createRef();
        this.triggerRef = React.createRef();
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.hoverChild = this.hoverChild.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);

        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);

        this.state = {
            isOpen: false,
            activeChildren: [],
            activeOptionIndex: -1,
            activeOptionName: null,
        };

        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed.bind(this),
            [DOWN_KEY]: this.handleKeyDownPressed.bind(this),
            [ESCAPE_KEY]: this.closeMenu.bind(this),
            [TAB_KEY]: this.closeMenu.bind(this),
            [ENTER_KEY]: this.handleKeyEnterPressed.bind(this),
        };
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
        const { activeChildren, activeOptionIndex } = this.state;
        let nextActiveIndex;
        if (activeOptionIndex < 1) {
            nextActiveIndex = activeChildren.length - 1;
        } else {
            nextActiveIndex = (activeOptionIndex - 1) % activeChildren.length;
        }
        this.setState({
            activeOptionIndex: nextActiveIndex,
            activeOptionName: activeChildren[nextActiveIndex].name,
        });
    }

    handleKeyDownPressed() {
        const { activeChildren, activeOptionIndex } = this.state;
        const nextActiveIndex = (activeOptionIndex + 1) % activeChildren.length;
        this.setState({
            activeOptionIndex: nextActiveIndex,
            activeOptionName: activeChildren[nextActiveIndex].name,
        });
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
        return this.setState({
            isOpen: true,
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
            children,
            id,
            tabIndex,
            placeholder,
            name,
        } = this.props;
        const { activeOptionName } = this.state;
        const ariaLabel = title || assistiveText;
        const { label: valueLabel, icon, name: currentValueName } = this.getValue();
        const providerContext = {
            privateOnClick: this.handleOptionClick,
            privateRegisterChild: this.registerChild,
            privateUnregisterChild: this.unregisterChild,
            privateOnHover: this.hoverChild,
            activeOptionName,
            currentValueName,
        };
        const value = valueLabel || '';

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
                    <Label label={pickListLabel} hideLabel={hideLabel} inputId={this.inputId} />
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
    /** Text label for the PickList. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
    label: null,
    hideLabel: false,
    className: undefined,
    style: undefined,
    id: undefined,
};
export default withReduxForm(Picklist);
