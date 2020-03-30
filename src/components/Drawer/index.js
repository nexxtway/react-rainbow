import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ESCAPE_KEY, TAB_KEY } from './../../libs/constants';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from '../../libs/scrollController';
import CounterManager from '../../libs/counterManager';
import manageTab from '../../libs/manageTab';
import RenderIf from '../RenderIf';
import StyledBackDrop from './styled/backDrop';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import StyledCloseButton from './styled/closeButton';
import StyledDivider from './styled/divider';
import StyledFooter from './styled/footer';
import Header from './header';
import CloseIcon from './closeIcon';
import { useUniqueIdentifier } from '../../libs/hooks';
import getSlideFrom from './helpers/getSlideFrom';

const DrawerState = {
    OPENING: 0,
    OPENED: 1,
    CLOSING: 2,
    CLOSED: 3,
};

/**
 * Drawers are surfaces containing supplementary content on your app.
 * @category Layout
 * */
export default function Drawer(props) {
    const {
        id,
        isOpen,
        hideCloseButton,
        onRequestClose,
        onOpened,
        header,
        footer,
        size,
        slideFrom,
        children,
        className,
        style,
    } = props;
    const headerId = useUniqueIdentifier('drawer-header');
    const contentId = useUniqueIdentifier('drawer-content');
    const triggerRef = useRef(null);
    const drawerRef = useRef(null);
    const contentRef = useRef(null);
    const [drawerState, setDrawerState] = useState(
        isOpen ? DrawerState.OPENED : DrawerState.CLOSED,
    );

    useEffect(() => {
        const contentElement = contentRef.current;
        if (isOpen) {
            CounterManager.increment();
            disableBodyScroll(contentElement);
            triggerRef.current = document.activeElement;
            setDrawerState(DrawerState.OPENING);
        }

        return () => {
            if (isOpen) {
                CounterManager.decrement();
                if (triggerRef.current) triggerRef.current.focus();
                if (!CounterManager.hasModalsOpen()) {
                    enableBodyScroll(contentElement);
                }
                clearAllBodyScrollLocks();
                setDrawerState(DrawerState.CLOSING);
            }
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && drawerState === DrawerState.OPENED) {
            drawerRef.current.focus();
            onOpened();
        }
    }, [drawerState, isOpen, onOpened]);

    const onSlideEnd = () => {
        if (drawerState === DrawerState.OPENING) {
            setDrawerState(DrawerState.OPENED);
        } else if (drawerState === DrawerState.CLOSING) {
            setDrawerState(DrawerState.CLOSED);
        }
    };

    const closeDrawer = () => onRequestClose();

    const handleBackDropClick = event => {
        if (isOpen && drawerRef.current.contains(event.target)) {
            return null;
        }
        return closeDrawer();
    };

    const handleKeyPressed = event => {
        event.stopPropagation();
        if (isOpen && event.keyCode === ESCAPE_KEY) {
            closeDrawer();
        }
        if (event.keyCode === TAB_KEY) {
            manageTab(drawerRef.current, event);
        }
        return null;
    };

    const drawerIsOpen = [DrawerState.OPENING, DrawerState.OPENED].includes(drawerState);
    if (drawerState !== null && drawerState !== DrawerState.CLOSED) {
        return createPortal(
            <StyledBackDrop
                id={id}
                role="presentation"
                onClick={handleBackDropClick}
                onKeyDown={handleKeyPressed}
            >
                <StyledContainer
                    role="dialog"
                    tabIndex={-1}
                    aria-labelledby={headerId}
                    aria-modal
                    aria-hidden={!drawerIsOpen}
                    aria-describedby={contentId}
                    className={className}
                    isOpen={drawerIsOpen}
                    style={style}
                    size={size}
                    slideFrom={getSlideFrom(slideFrom, 'left')}
                    ref={drawerRef}
                    onAnimationEnd={onSlideEnd}
                >
                    <Header id={headerId} content={header} />
                    <RenderIf isTrue={!hideCloseButton}>
                        <StyledCloseButton
                            id="drawer-close-button"
                            icon={<CloseIcon />}
                            title="Hide"
                            onClick={closeDrawer}
                        />
                    </RenderIf>
                    <StyledContent id={contentId} ref={contentRef}>
                        {children}
                    </StyledContent>
                    <RenderIf isTrue={!!footer}>
                        <StyledDivider />
                        <StyledFooter>{footer}</StyledFooter>
                    </RenderIf>
                </StyledContainer>
            </StyledBackDrop>,
            document.body,
        );
    }
    return <></>;
}

Drawer.propTypes = {
    /** The header can include text or another component,
     * and is displayed at the top of the component. */
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The size of the drawer. Valid values are small, medium, and large.
     * This value defaults to small. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The footer can include text or another component
     * and is displayed at the bottom of the component. */
    footer: PropTypes.node,
    /** Controls whether the Drawer is opened or not. If true, the drawer is opened. */
    isOpen: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The action triggered when the component requested to close
     * (e.g click hide button, press esc key or click outside the drawer). */
    onRequestClose: PropTypes.func,
    /** A callback triggered when the drawer is opened. This is usefull for example to set focus
     * to an element inside the drawer's content after it is opened. */
    onOpened: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** If true, hide the close button in the drawer. */
    hideCloseButton: PropTypes.bool,
    /** The position from where the drawer is opened. */
    slideFrom: PropTypes.oneOf(['left', 'right']),
};

Drawer.defaultProps = {
    isOpen: false,
    header: null,
    size: 'small',
    footer: null,
    className: undefined,
    style: undefined,
    children: null,
    id: undefined,
    onRequestClose: () => {},
    onOpened: () => {},
    hideCloseButton: false,
    slideFrom: 'left',
};
