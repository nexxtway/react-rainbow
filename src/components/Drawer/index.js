import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ESCAPE_KEY, TAB_KEY } from './../../libs/constants';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from '../Modal/scrollController';
import CounterManager from '../Modal/counterManager';
import manageTab from '../Modal/manageTab';
import RenderIf from '../RenderIf';
import StyledBackDrop from './styled/backDrop';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import StyledCloseButton from './styled/closeButton';
import Header from './header';
import Footer from './footer';
import CloseIcon from './closeIcon';
import { useUniqueIdentifier } from '../../libs/hooks';

/**
 * Drawers are surfaces containing supplementary content on your app.
 */
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

    useEffect(() => {
        const contentElement = contentRef.current;
        if (isOpen) {
            CounterManager.increment();
            disableBodyScroll(contentElement);
            triggerRef.current = document.activeElement;
            drawerRef.current.focus();
            onOpened();
        }

        return () => {
            if (isOpen) CounterManager.decrement();
            if (triggerRef.current) triggerRef.current.focus();
            if (!CounterManager.hasModalsOpen()) {
                enableBodyScroll(contentElement);
            }
            clearAllBodyScrollLocks();
        };
    }, [isOpen, onOpened]);

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

    if (isOpen) {
        return createPortal(
            <StyledBackDrop
                id={id}
                role="presentation"
                isOpen={isOpen}
                onClick={handleBackDropClick}
                onKeyDown={handleKeyPressed}
            >
                <StyledContainer
                    role="dialog"
                    tabIndex={-1}
                    aria-labelledby={headerId}
                    aria-modal
                    aria-hidden
                    aria-describedby={contentId}
                    className={className}
                    isOpen={isOpen}
                    style={style}
                    size={size}
                    slideFrom={slideFrom}
                    ref={drawerRef}
                >
                    <Header content={header} />
                    <RenderIf isTrue={!hideCloseButton}>
                        <StyledCloseButton
                            icon={<CloseIcon />}
                            title="Hide"
                            onClick={closeDrawer}
                        />
                    </RenderIf>
                    <StyledContent ref={contentRef}>{children}</StyledContent>
                    <Footer content={footer} />
                </StyledContainer>
            </StyledBackDrop>,
            document.body,
        );
    }
    return null;
}

Drawer.propTypes = {
    /** The header can include text or another component,
     * and is displayed at the top of the component. */
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The size of the drawer. Valid values are small, medium, and large.
     * This value defaults to small. */
    size: PropTypes.oneOf(['small', 'medium', 'full']),
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
    slideFrom: 'right',
};
