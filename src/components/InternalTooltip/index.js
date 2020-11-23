import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import StyledTooltip from './styled';
import InternalOverlay from '../InternalOverlay';
import tooltipPositionResolver from './helpers/tooltipPositionResolver';
import resolveElement from '../InternalOverlay/helpers/resolveElement';

/**
 * A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing.
 * @category Internal
 */

const InternalTooltip = React.forwardRef((props, ref) => {
    const [pos, setPos] = useState();
    const { className, style, children, isVisible, preferredPosition, triggerElementRef } = props;
    const tooltipRef = useRef();

    const handleOpen = () => {
        const triggerRect = resolveElement(triggerElementRef).getBoundingClientRect();
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
            keepScrollEnabled
        >
            <div ref={ref}>
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
            </div>
        </InternalOverlay>
    );
});

InternalTooltip.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Controls whether the InternalOverlay is visible or not. If true, the content of the Overlay is shown. */
    isVisible: PropTypes.bool,
    /** The preferred position of the tooltip */
    preferredPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Ref or function that returns a ref to a DOM element, the DOM element resolved by this ref will be used to positioning the component passed when visible. */
    triggerElementRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    /**
     * @ignore
     */
    children: PropTypes.node,
};

InternalTooltip.defaultProps = {
    className: undefined,
    style: undefined,
    isVisible: false,
    preferredPosition: 'top',
    children: undefined,
};

export default InternalTooltip;
