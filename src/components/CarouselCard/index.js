import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import Indicators from './indicators';
import { useChildrenRegister, usePrevious } from '../../libs/hooks';
import { getHeight, getItemIndex } from './helpers';
import AnimationButton from './animationButton';
import StyledContainer from './styled/container';
import StyledAutoplay from './styled/autoplay';
import StyledImagesUl from './styled/imagesUl';

const SELECTOR = '[role="tabpanel"]';

/**
 * A carouselCard allows multiple pieces of featured content to occupy an allocated amount of space.
 */
const CarouselCard = props => {
    const {
        children,
        id,
        className,
        style,
        scrollDuration,
        disableAutoScroll,
        disableAutoRefresh,
    } = props;

    const containerRef = useRef();
    const listRef = useRef();
    const animationTimeoutRef = useRef();

    const [isAnimationPaused, setIsAnimationPaused] = useState(disableAutoScroll);
    const [activeItem, setActiveItem] = useState();
    const prevActiveItem = usePrevious(activeItem);

    const { childrenRegistered, register, unregister } = useChildrenRegister({
        containerRef: listRef,
        selector: SELECTOR,
    });

    useEffect(() => {
        if (childrenRegistered[0] && childrenRegistered[0].id !== activeItem) {
            setActiveItem(childrenRegistered[0].id);
        }
        return () => {
            if (childrenRegistered[0] && childrenRegistered[0].id !== activeItem) {
                setActiveItem(childrenRegistered[0].id);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [childrenRegistered]);

    useEffect(() => {
        if (!isAnimationPaused) {
            animationTimeoutRef.current = setTimeout(() => {
                const selectedItemIndex = getItemIndex(childrenRegistered, activeItem);
                const isLastItem = selectedItemIndex === childrenRegistered.length - 1;
                const nextItem = isLastItem ? 0 : selectedItemIndex + 1;
                if (isLastItem && disableAutoRefresh) {
                    setIsAnimationPaused(true);
                } else if (childrenRegistered[nextItem]) {
                    setActiveItem(childrenRegistered[nextItem].id);
                }
            }, scrollDuration * 1000);
        }
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, [activeItem, childrenRegistered, disableAutoRefresh, isAnimationPaused, scrollDuration]);

    const handleSelect = childId => {
        setActiveItem(childId);
        setIsAnimationPaused(true);
    };

    const containerStyle = { height: getHeight(containerRef.current), ...style };
    const context = {
        childrenRegistered,
        activeItem,
        prevActiveItem,
        isAnimationPaused,
        register,
        unregister,
    };

    return (
        <StyledContainer className={className} style={containerStyle} id={id} ref={containerRef}>
            <StyledAutoplay>
                <AnimationButton
                    onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                    isAnimationPaused={isAnimationPaused}
                />
            </StyledAutoplay>
            <StyledImagesUl ref={listRef}>
                <Provider value={context}>{children}</Provider>
            </StyledImagesUl>
            <Indicators
                carouselChildren={childrenRegistered}
                onSelect={handleSelect}
                selectedItem={activeItem}
            />
        </StyledContainer>
    );
};

CarouselCard.propTypes = {
    /** The auto scroll duration. The default is 5 seconds, after that the next image is displayed. */
    scrollDuration: PropTypes.number,
    /** Specifies whether auto scroll is disabled. The default value is false. */
    disableAutoScroll: PropTypes.bool,
    /** Specifies whether the carousel should stop looping from the beginning after the last item is displayed.
     * The default value is false. */
    disableAutoRefresh: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** The id of the outer element. */
    id: PropTypes.string,
};

CarouselCard.defaultProps = {
    scrollDuration: 5,
    disableAutoScroll: false,
    disableAutoRefresh: false,
    className: undefined,
    style: undefined,
    children: null,
    id: undefined,
};

export default CarouselCard;
