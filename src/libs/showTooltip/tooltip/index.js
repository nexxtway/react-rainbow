import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from '@rainbow-modules/hooks';
import StyledTooltip from './styled';
import InternalOverlay from '../../../components/InternalOverlay';
import tooltipPositionResolver from './helpers/tooltipPositionResolver';

const Tooltip = props => {
    const [pos, setPos] = useState();
    const [isVisible, setIsVisible] = useState(true);
    const { className, style, children, preferredPosition, triggerElementRef } = props;
    const tooltipRef = useRef();

    useOutsideClick(
        tooltipRef,
        () => {
            setIsVisible(false);
        },
        isVisible,
    );

    const handleOpen = () => {
        const triggerRect = triggerElementRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        if (tooltipRect.bottom < triggerRect.top) {
            setPos('top');
        } else if (tooltipRect.top > triggerRect.bottom) {
            setPos('bottom');
        } else if (tooltipRect.right < triggerRect.left) {
            setPos('left');
        } else if (tooltipRect.left > triggerRect.right) {
            setPos('right');
        } else {
            setPos('floating');
        }
    };

    if (!isVisible && pos !== null) {
        setPos(null);
    }
    return (
        <InternalOverlay
            isVisible={isVisible}
            triggerElementRef={triggerElementRef}
            positionResolver={opts => tooltipPositionResolver(opts, preferredPosition)}
            onOpened={handleOpen}
        >
            <StyledTooltip
                role="tooltip"
                className={className}
                style={style}
                position={pos}
                isVisible={isVisible}
                ref={tooltipRef}
            >
                {children}
            </StyledTooltip>
        </InternalOverlay>
    );
};

Tooltip.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The preferred position of the tooltip */
    preferredPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Ref or function that returns a ref to a DOM element, the DOM element resolved by this ref will be used to positioning the component passed when visible. */
    triggerElementRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    /**
     * @ignore
     */
    children: PropTypes.node,
};

Tooltip.defaultProps = {
    className: undefined,
    style: undefined,
    preferredPosition: 'top',
    children: undefined,
};

export default Tooltip;
