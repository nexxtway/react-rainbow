import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CarouselCardContext } from '../CarouselCard/context';
import { getItemIndex } from '../CarouselCard/helpers';
import StyledLi from './styled/li';
import StyledInnerContainer from './styled/innerContainer';
import ImageContainer from './imageContainer';
import { useUniqueIdentifier } from '../../libs/hooks';

const defaultContext = {
    register: () => {},
    unregister: () => {},
};

const CarouselImage = props => {
    const { assistiveText, description, header, href, src, style, className } = props;
    const {
        register,
        unregister,
        activeItem,
        prevActiveItem,
        childrenRegistered,
        isAnimationPaused,
    } = useContext(CarouselCardContext) || defaultContext;
    const imageId = useUniqueIdentifier('carousel-content-id');
    const indicatorId = useUniqueIdentifier('indicator-id');
    const itemRef = useRef();

    useEffect(() => {
        register({
            containerId: imageId,
            id: indicatorId,
            ref: itemRef.current,
            header,
        });
        return () => {
            unregister(indicatorId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const shouldBeActive = () => {
        const areTheSame = activeItem === prevActiveItem;
        const isSelected = activeItem === indicatorId;
        return areTheSame && isSelected;
    };

    const shouldShow = () => {
        const areTheSame = activeItem === prevActiveItem;
        if (areTheSame) return false;
        return activeItem === indicatorId;
    };

    const shouldHide = () => {
        const isNotActive = activeItem !== indicatorId;
        const itWasActive = prevActiveItem === indicatorId;
        return isNotActive && itWasActive;
    };

    const getTabIndex = () => {
        if (href) {
            if (activeItem === indicatorId) {
                return 0;
            }
            return -1;
        }
        return undefined;
    };

    const getHtmlElememnt = () => {
        if (href && typeof href === 'string') {
            return 'a';
        }
        return 'div';
    };

    const getAnimationDirection = () => {
        if (isAnimationPaused) {
            const activeItemIndex = getItemIndex(childrenRegistered, activeItem);
            const prevItemIndex = getItemIndex(childrenRegistered, prevActiveItem);
            if (activeItemIndex === 0 && prevItemIndex === childrenRegistered.length - 1) {
                return 'right-to-left';
            }
            if (prevItemIndex === 0 && activeItemIndex === childrenRegistered.length - 1) {
                return 'left-to-right';
            }
            if (activeItemIndex > prevItemIndex) {
                return 'right-to-left';
            }
            return 'left-to-right';
        }
        return 'right-to-left';
    };

    const ariaHidden = activeItem !== indicatorId;
    const hasContent = Boolean(header || description);
    const imageSrc = { backgroundImage: `url(${src})` };

    return (
        <StyledLi
            id={imageId}
            className={className}
            role="tabpanel"
            aria-hidden={ariaHidden}
            aria-labelledby={imageId}
            style={style}
            ref={itemRef}
            shouldBeActive={shouldBeActive()}
            shouldShow={shouldShow()}
            shouldHide={shouldHide()}
            direction={getAnimationDirection()}
        >
            <StyledInnerContainer
                className="rainbow-carousel-image"
                tabIndex={getTabIndex()}
                href={href}
                as={getHtmlElememnt()}
                data-id="carousel-image_inner-container"
            >
                <ImageContainer
                    imageSrc={imageSrc}
                    assistiveText={assistiveText}
                    hasContent={hasContent}
                    header={header}
                    description={description}
                />
            </StyledInnerContainer>
        </StyledLi>
    );
};

CarouselImage.propTypes = {
    /** The URL for the image. */
    src: PropTypes.string,
    /** The header can include text or another component,
     * and is displayed in the top of the content section. */
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description can include text or another component,
     * and is displayed below the header in the content section. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** The URL of the page that the card goes to. */
    href: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

CarouselImage.defaultProps = {
    src: undefined,
    header: undefined,
    description: undefined,
    assistiveText: undefined,
    href: undefined,
    className: undefined,
    style: undefined,
};

export default CarouselImage;
