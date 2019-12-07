/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import { Consumer } from '../CarouselCard/context';
import { getItemIndex } from '../CarouselCard/utils';
import StyledLi from './styled/li';
import StyledInnerContainer from './styled/innerContainer';
import ImageContainer from './imageContainer';

class Item extends Component {
    constructor(props) {
        super(props);
        this.carouselImageID = uniqueId('carousel-content-id');
        this.carouselIndicatorID = uniqueId('indicator-id');
        this.itemRef = React.createRef();
        this.state = {
            activeItem: undefined,
            prevActiveItem: undefined,
        };
    }

    static getDerivedStateFromProps(props, state) {
        const { activeItem } = props;
        const { activeItem: stateActiveItem } = state;
        const newState = {
            activeItem,
            prevActiveItem: stateActiveItem,
        };
        const isNotTheSameActive = state.activeItem !== newState.activeItem;
        const isNotTheSamePrev = state.prevActiveItem !== newState.prevActiveItem;
        const isNotTheSameState = isNotTheSameActive || isNotTheSamePrev;
        if (isNotTheSameState) {
            return newState;
        }
        return null;
    }

    componentDidMount() {
        const { privateRegisterChild, header } = this.props;
        return setTimeout(
            () =>
                privateRegisterChild({
                    containerID: this.carouselImageID,
                    indicatorID: this.carouselIndicatorID,
                    ref: this.itemRef.current,
                    header,
                }),
            0,
        );
    }

    componentWillUnmount() {
        const { privateUnregisterChild } = this.props;
        privateUnregisterChild(this.carouselIndicatorID);
    }

    getAnimationDirection() {
        const { childrenRegistred, isAnimationPaused } = this.props;
        const { activeItem, prevActiveItem } = this.state;
        if (isAnimationPaused) {
            const activeItemIndex = getItemIndex(childrenRegistred, activeItem);
            const prevItemIndex = getItemIndex(childrenRegistred, prevActiveItem);
            if (activeItemIndex === 0 && prevItemIndex === childrenRegistred.length - 1) {
                return 'right-to-left';
            } else if (prevItemIndex === 0 && activeItemIndex === childrenRegistred.length - 1) {
                return 'left-to-right';
            } else if (activeItemIndex > prevItemIndex) {
                return 'right-to-left';
            }
            return 'left-to-right';
        }
        return 'right-to-left';
    }

    getTabIndex() {
        const { activeItem } = this.props;
        if (activeItem === this.carouselIndicatorID) {
            return 0;
        }
        return -1;
    }

    getAriaHidden() {
        const { activeItem } = this.props;
        return activeItem !== this.carouselIndicatorID;
    }

    getImageSrc() {
        const { src } = this.props;
        return {
            backgroundImage: `url(${src})`,
        };
    }

    getHtmlElememnt() {
        const { href } = this.props;
        if (href && typeof href === 'string') {
            return 'a';
        }
        return 'div';
    }

    shouldShow() {
        const { activeItem, prevActiveItem } = this.state;
        const areTheSame = activeItem === prevActiveItem;
        if (areTheSame) return false;
        return activeItem === this.carouselIndicatorID;
    }

    shouldHide() {
        const { activeItem, prevActiveItem } = this.state;
        const isNotActive = activeItem !== this.carouselIndicatorID;
        const itWasActive = prevActiveItem === this.carouselIndicatorID;
        return isNotActive && itWasActive;
    }

    shouldBeActive() {
        const { activeItem, prevActiveItem } = this.state;
        const areTheSame = activeItem === prevActiveItem;
        const isSelected = activeItem === this.carouselIndicatorID;
        return areTheSame && isSelected;
    }

    render() {
        const { assistiveText, description, header, href, style, className } = this.props;
        const hasContent = !!(header || description);
        const tabIndex = href ? this.getTabIndex() : undefined;
        return (
            <StyledLi
                id={this.carouselImageID}
                className={className}
                role="tabpanel"
                aria-hidden={this.getAriaHidden()}
                aria-labelledby={this.carouselIndicatorID}
                style={style}
                ref={this.itemRef}
                shouldBeActive={this.shouldBeActive()}
                shouldShow={this.shouldShow()}
                shouldHide={this.shouldHide()}
                direction={this.getAnimationDirection()}
            >
                <StyledInnerContainer
                    className="rainbow-carousel-image"
                    tabIndex={tabIndex}
                    href={href}
                    as={this.getHtmlElememnt()}
                    data-id="carousel-image_inner-container"
                >
                    <ImageContainer
                        imageSrc={this.getImageSrc()}
                        assistiveText={assistiveText}
                        hasContent={hasContent}
                        header={header}
                        description={description}
                    />
                </StyledInnerContainer>
            </StyledLi>
        );
    }
}

export default function CarouselImage(props) {
    return <Consumer>{value => <Item {...props} {...value} />}</Consumer>;
}

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
