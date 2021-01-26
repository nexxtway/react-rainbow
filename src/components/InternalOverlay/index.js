/* eslint-disable id-length */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useIsomorphicLayoutEffect } from '../../libs/hooks';
import ContentMetaResolver from './ContentMetaResolver';
import defaultPositionResolver from './helpers/defaultPositionResolver';
import resolveElement from './helpers/resolveElement';
import useDisableScroll from './hooks/useDisableScroll';

const Container = styled.div`
    position: fixed;
    z-index: 999999999;
    top: ${props => props.position && props.position.top}px;
    left: ${props => props.position && props.position.left}px;
    bottom: ${props => props.position && props.position.bottom}px;
    ${props =>
        props.position &&
        props.position.width &&
        `
            width: ${props.position.width}px;
        `};
`;

const resolveTriggerMeta = ref => {
    const element = resolveElement(ref);
    if (element instanceof Element) {
        const { x, y, width, height } = element.getClientRects()[0];
        return {
            leftUpAnchor: { x, y },
            leftBottomAnchor: { x, y: y + height },
            rightUpAnchor: { x: x + width, y },
            rightBottomAnchor: { x: x + width, y: y + height },
            width,
            height,
        };
    }
    // eslint-disable-next-line no-console
    console.debug(`The "triggerElementRef" provided is not resolving to a valid DOM Element.`);
    return {
        leftUpAnchor: { x: 0, y: 0 },
        leftBottomAnchor: { x: 0, y: 0 },
        rightUpAnchor: { x: 0, y: 0 },
        rightBottomAnchor: { x: 0, y: 0 },
        width: 0,
        height: 0,
    };
};

const resolveViewportMeta = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
};

const resolvePosition = opts => {
    const { triggerMeta, viewportMeta, contentMeta, positionResolver } = opts;
    if (typeof positionResolver === 'function') {
        const pos = positionResolver({
            trigger: triggerMeta,
            viewport: viewportMeta,
            content: contentMeta,
        });
        if (typeof pos === 'object') {
            return pos;
        }
    }
    return defaultPositionResolver({
        trigger: triggerMeta,
        viewport: viewportMeta,
        content: contentMeta,
    });
};

/**
 * This component implements the positioning of a component (inserted in the DOM at the body level) based on a trigger DOM element. By the way of example, you can think of the use case of a Menu Options, Tooltip, Popup that should be floating on top of all the elements and it should be correctly positioned based on the component/element that triggers the show/open action.
 * @category Internal
 */
const InternalOverlay = props => {
    const {
        render: ContentComponent,
        isVisible,
        triggerElementRef,
        positionResolver,
        onOpened,
        children,
        keepScrollEnabled,
    } = props;
    const containerRef = useRef();
    const [contentMeta, updateContentMeta] = useState(false);
    const shouldOpen = isVisible && contentMeta;
    useEffect(() => {
        if (shouldOpen) {
            onOpened();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldOpen]);

    const shouldDisableScroll = shouldOpen && !keepScrollEnabled;
    useDisableScroll(shouldDisableScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useIsomorphicLayoutEffect(() => {
        if (contentMeta && containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            if (width !== contentMeta.width || height !== contentMeta.height) {
                updateContentMeta({ width, height });
            }
        }
    });

    if (isVisible) {
        const content = children || <ContentComponent />;
        if (contentMeta) {
            const triggerMeta = resolveTriggerMeta(triggerElementRef);
            const viewportMeta = resolveViewportMeta();
            const position = resolvePosition({
                triggerMeta,
                contentMeta,
                viewportMeta,
                positionResolver,
            });
            return createPortal(
                <Container position={position} ref={containerRef}>
                    {content}
                </Container>,
                document.body,
            );
        }
        return (
            <ContentMetaResolver component={ContentComponent} onResolved={updateContentMeta}>
                {children}
            </ContentMetaResolver>
        );
    }
    return null;
};

InternalOverlay.propTypes = {
    /** Functional component or class that will be rendered when the isVisible prop is true. */
    render: PropTypes.func,
    /** Controls whether the InternalOverlay is visible or not. If true, the content of the Overlay is shown. */
    isVisible: PropTypes.bool,
    /** Ref or function that returns a ref to a DOM element, the DOM element resolved by this ref will be used to positioning the component passed when visible. */
    triggerElementRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    /** It could be used to write your own position resolution. The function passed here will receive the necessary data to compute an object with { top, left } CSS position of the component rendered. */
    positionResolver: PropTypes.func,
    /** A callback triggered when the overlay component is opened. This is useful for example to set focus
     * to an element after it is opened.
     */
    onOpened: PropTypes.func,
    /**
     *  When true it wont disable scroll on the window when the overlay is open.
     */
    keepScrollEnabled: PropTypes.bool,
    /**
     * @ignore
     */
    children: PropTypes.node,
};

InternalOverlay.defaultProps = {
    render: () => {},
    isVisible: false,
    positionResolver: undefined,
    onOpened: () => {},
    children: undefined,
    keepScrollEnabled: false,
};

InternalOverlay.defaultPositionResolver = defaultPositionResolver;

export default InternalOverlay;
