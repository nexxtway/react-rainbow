import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useWindowScrolling } from '@rainbow-modules/hooks';
import {
    useDisclosure,
    useOutsideClick,
    useWindowResize,
    useUniqueIdentifier,
} from '../../libs/hooks';
import { ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import InternalOverlay from '../InternalOverlay';
import MenuContent from './menuContent';
import { StyledContainer, StyledDropdown } from './styled';
import { resolvePosition } from './utils';

const PrimitiveMenu = React.forwardRef((props, ref) => {
    const {
        id,
        className,
        style,
        children,
        isLoading,
        menuAlignment,
        menuSize,
        title,
        assistiveText,
        trigger: Trigger,
        borderRadius,
        ...rest
    } = props;
    const listboxId = useUniqueIdentifier('listbox');
    const ariaLabel = title || assistiveText;
    const triggerRef = useRef();
    const dropdownRef = useRef();
    const { isOpen, close: closeMenu, toggle: toggleMenu } = useDisclosure(false);
    useOutsideClick(
        dropdownRef,
        event => {
            if (triggerRef.current.htmlElementRef.current.contains(event.target)) {
                return null;
            }
            return closeMenu();
        },
        isOpen,
    );
    useWindowResize(() => closeMenu(), isOpen);
    useWindowScrolling(closeMenu, isOpen);

    useImperativeHandle(ref, () => ({
        focus: () => {
            triggerRef.current.focus();
        },
        click: () => {
            triggerRef.current.click();
        },
        blur: () => {
            triggerRef.current.blur();
        },
    }));

    const positionResolver = useCallback(opts => resolvePosition(opts, menuAlignment), [
        menuAlignment,
    ]);

    const handleKeyDown = useCallback(
        event => {
            if (isOpen) {
                const { keyCode } = event;
                if (keyCode !== TAB_KEY) event.preventDefault();
                if (keyCode === TAB_KEY || keyCode === ESCAPE_KEY) {
                    closeMenu();
                    triggerRef.current.focus();
                }
            }
        },
        [closeMenu, isOpen],
    );

    return (
        <StyledContainer
            id={id}
            role="presentation"
            className={className}
            style={style}
            onKeyDown={handleKeyDown}
        >
            <Trigger
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
                isOpen={isOpen}
                title={title}
                ariaControls={listboxId}
                ariaExpanded={isOpen}
                ariaHaspopup
                assistiveText={assistiveText}
                onClick={toggleMenu}
                ref={triggerRef}
                borderRadius={borderRadius}
            />
            <InternalOverlay
                isVisible={isOpen}
                positionResolver={positionResolver}
                triggerElementRef={() => triggerRef.current.htmlElementRef}
            >
                <StyledDropdown
                    id={listboxId}
                    data-id="primitive-menu_dropdown"
                    ref={dropdownRef}
                    menuSize={menuSize}
                    menuAlignment={menuAlignment}
                    isLoading={isLoading}
                    borderRadius={borderRadius}
                >
                    <MenuContent
                        ariaLabel={ariaLabel}
                        onRequestClose={closeMenu}
                        isLoading={isLoading}
                    >
                        {children}
                    </MenuContent>
                </StyledDropdown>
            </InternalOverlay>
        </StyledContainer>
    );
});

PrimitiveMenu.propTypes = {
    /** The content of the PrimitiveMenu. Used to render the menuItem elements
     * when the PrimitiveMenu is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The size of the menu. Options include xx-small, x-small, medium, or large.
     * This value defaults to xx-small. */
    menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Determines the alignment of the menu relative to the element.
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
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The element. */
    trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    /** The border radius of the button and dropdown. Valid values are square, 'semi-square', semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

PrimitiveMenu.defaultProps = {
    children: null,
    menuSize: 'xx-small',
    menuAlignment: 'left',
    isLoading: false,
    title: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    borderRadius: 'rounded',
};

export default PrimitiveMenu;
