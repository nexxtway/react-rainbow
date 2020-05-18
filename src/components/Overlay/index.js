import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ContentMetaResolver from './ContentMetaResolver';
import defaultPositionResolver from './defaultPositionResolver';
import { disableScroll, enableScroll } from './scroll';

const Container = styled.div`
    position: fixed;
    z-index: 999999999;
    top: ${props => props.posistion && props.posistion.top}px;
    left: ${props => props.posistion && props.posistion.left}px;
`;

const resolveElement = ref => {
    if (typeof ref === 'function') {
        const ret = ref();
        return ret && ret.current;
    }
    return ref && ref.current;
};

const resolveTriggerMeta = ref => {
    const element = resolveElement(ref);
    if (element instanceof Element) {
        const { x, y, width, height } = element.getClientRects()[0];
        return {
            leftUpAnchor: { x, y },
            leftBottomAnchor: { x, y: y + height },
            rightUpAnchor: { x: x + width, y },
            rightBottomAnchor: { x: x + width, y: y + height },
        };
    }
    // eslint-disable-next-line no-console
    console.debug(`The "triggerElementRef" provided is not resolving to a valid DOM Element.`);
    return {
        leftUpAnchor: { x: 0, y: 0 },
        leftBottomAnchor: { x: 0, y: 0 },
        rightUpAnchor: { x: 0, y: 0 },
        rightBottomAnchor: { x: 0, y: 0 },
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
 * Overlay are used to.
 * @category Internal
 */
const Overlay = props => {
    const { render: ContentComponent, isVisible, triggerElementRef, positionResolver } = props;
    const [contentMeta, updateContentMeta] = useState(false);
    useEffect(() => {
        if (isVisible && contentMeta) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isVisible, contentMeta]);
    if (isVisible) {
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
                <Container posistion={position}>
                    <ContentComponent />
                </Container>,
                document.body,
            );
        }
        return <ContentMetaResolver component={ContentComponent} onResolved={updateContentMeta} />;
    }
    return null;
};

Overlay.propTypes = {
    render: PropTypes.func,
    isVisible: PropTypes.bool,
    triggerElementRef: PropTypes.oneOfType(PropTypes.object, PropTypes.func).isRequired,
    positionResolver: PropTypes.func,
};

Overlay.defaultProps = {
    render: () => {},
    isVisible: false,
    positionResolver: undefined,
};

export default Overlay;
