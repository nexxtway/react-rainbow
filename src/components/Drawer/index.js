import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import StyledCloseButton from './styled/closeButton';
import Header from './header';
import Footer from './footer';
import CloseIcon from './closeIcon';
import { useUniqueIdentifier, useOutsideClick } from '../../libs/hooks';

const DrawerState = {
    SHOWING: 0,
    VISIBLE: 1,
    HIDDING: 2,
    HIDDEN: 3,
};

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
    const drawerRef = useRef(null);
    const contentRef = useRef(null);
    const [drawerState, setDrawerState] = useState(
        isOpen ? DrawerState.VISIBLE : DrawerState.HIDDEN,
    );

    const closeDrawer = () => setDrawerState(DrawerState.HIDDING);

    useOutsideClick(drawerRef, closeDrawer);

    useEffect(() => {
        if (isOpen) {
            if (drawerState === DrawerState.HIDDEN) {
                setDrawerState(DrawerState.SHOWING);
            }
        }
    }, [isOpen, drawerState]);

    useEffect(() => {
        if (drawerState === DrawerState.VISIBLE) {
            onOpened();
        } else if (isOpen && drawerState === DrawerState.HIDDEN) {
            onRequestClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerState]);

    const onSlideEnd = () => {
        if (drawerState === DrawerState.SHOWING) {
            setDrawerState(DrawerState.VISIBLE);
        } else if (drawerState === DrawerState.HIDDING) {
            setDrawerState(DrawerState.HIDDEN);
        }
    };

    if (isOpen && drawerState !== DrawerState.HIDDEN) {
        return createPortal(
            <StyledContainer
                role="dialog"
                tabIndex={-1}
                id={id}
                aria-labelledby={headerId}
                aria-modal
                aria-hidden
                aria-describedby={contentId}
                className={className}
                isOpen={[DrawerState.SHOWING, DrawerState.VISIBLE].includes(drawerState)}
                style={style}
                size={size}
                slideFrom={slideFrom}
                onAnimationEnd={onSlideEnd}
                ref={drawerRef}
            >
                <Header content={header} />
                <RenderIf isTrue={!hideCloseButton}>
                    <StyledCloseButton icon={<CloseIcon />} title="Hide" onClick={closeDrawer} />
                </RenderIf>
                <StyledContent ref={contentRef}>{children}</StyledContent>
                <Footer content={footer} />
            </StyledContainer>,
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
