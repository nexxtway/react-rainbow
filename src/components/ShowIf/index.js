import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AnimatedContainer from './styled';
import getElementBoundingClientRect from './helpers/getElementDimensions';

/**
 * A component that shows its contents when a condition is met. Works similar to `RenderIf`,
 * but `ShowIf` does not remove the elements from the DOM, and animates the content in and out.
 */
const ShowIf = ({ id, className, style, isTrue, inAnimation, outAnimation, children }) => {
    const [animation, setAnimation] = useState();
    const [isVisible, setIsVisible] = useState(isTrue);
    const [dimensions, setDimensions] = useState();
    const ref = useRef();

    useLayoutEffect(() => {
        if (isTrue) {
            const rect = getElementBoundingClientRect(ref.current);
            setDimensions(rect);
            setIsVisible(true);
            setAnimation(`${inAnimation}In`);
        } else {
            setAnimation(`${outAnimation}Out`);
        }
    }, [isTrue, inAnimation, outAnimation]);

    const handleAnimationEnd = event => {
        if (event.animationName.includes('Out')) {
            setIsVisible(false);
        }
    };

    return (
        <AnimatedContainer
            id={id}
            className={className}
            style={style}
            animation={animation}
            isVisible={isVisible}
            dimensions={dimensions}
            onAnimationEnd={handleAnimationEnd}
            ref={ref}
        >
            {children}
        </AnimatedContainer>
    );
};

ShowIf.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** Indicates whether the component content is showed or not. If is set to true, then is showed the component content. */
    isTrue: PropTypes.any,
    inAnimation: PropTypes.oneOf(['fade', 'slideVertical', 'slideHorizontal']),
    outAnimation: PropTypes.oneOf(['fade', 'slideVertical', 'slideHorizontal']),
    /** The content of the component. */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
        PropTypes.node,
    ]),
};

ShowIf.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    isTrue: false,
    inAnimation: 'fade',
    outAnimation: 'fade',
    children: [],
};

export default ShowIf;
