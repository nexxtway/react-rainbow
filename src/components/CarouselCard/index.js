/* eslint-disable no-script-url,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import Indicators from './indicators';
import AnimationButton from './animationButton';
import {
    getItemIndex,
    getChildTabNodes,
    insertChildOrderly,
    getCarouselCardContainerStyles,
} from './utils';
import StyledContainer from './styled/container';
import StyledAutoplay from './styled/autoplay';
import StyledImagesUl from './styled/imagesUl';

/**
 * A carouselCard allows multiple pieces of featured content to occupy an allocated amount of space.
 */
export default class CarouselCard extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            childrenRegistred: [],
            activeItem: undefined,
            isAnimationPaused: this.props.disableAutoScroll,
            privateRegisterChild: this.registerChild,
            privateUnregisterChild: this.unregisterChild,
        };
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        const { isAnimationPaused } = this.state;
        if (!isAnimationPaused) {
            this.startAnimation();
        }
    }

    getContainerStyle() {
        const { style } = this.props;
        return Object.assign({}, getCarouselCardContainerStyles(this.container.current), style);
    }

    setActiveItem(id) {
        this.setState({ activeItem: id, isAnimationPaused: true });
    }

    startAnimation() {
        const { scrollDuration, disableAutoRefresh } = this.props;
        setTimeout(() => {
            const { isAnimationPaused } = this.state;
            if (!isAnimationPaused) {
                const { childrenRegistred, activeItem } = this.state;
                const selectedItemIndex = getItemIndex(childrenRegistred, activeItem);
                const isLastItem = selectedItemIndex === childrenRegistred.length - 1;
                const nextItem = isLastItem ? 0 : selectedItemIndex + 1;
                if (isLastItem && disableAutoRefresh) {
                    this.setState({ isAnimationPaused: true });
                } else {
                    this.startAnimation();
                    this.setState({
                        activeItem: childrenRegistred[nextItem].indicatorID,
                    });
                }
            }
        }, scrollDuration * 1000);
    }
    handleOnClick() {
        const { isAnimationPaused } = this.state;
        if (isAnimationPaused) {
            this.startAnimation();
        }
        this.setState({ isAnimationPaused: !isAnimationPaused });
    }

    registerChild(child) {
        const { childrenRegistred } = this.state;
        const [...nodes] = getChildTabNodes(this.containerRef.current);
        const newChildren = insertChildOrderly(childrenRegistred, child, nodes);
        this.setState({
            childrenRegistred: newChildren,
            activeItem: newChildren[0].indicatorID,
        });
    }

    unregisterChild(indicatorID) {
        const { childrenRegistred } = this.state;
        const newChildren = childrenRegistred.filter(child => child.indicatorID !== indicatorID);
        this.setState({
            childrenRegistred: newChildren,
            activeItem: newChildren[0].indicatorID,
        });
    }

    render() {
        const { children, id, className } = this.props;
        const { childrenRegistred, activeItem, isAnimationPaused } = this.state;
        return (
            <StyledContainer
                className={className}
                style={this.getContainerStyle()}
                id={id}
                ref={this.container}
            >
                <StyledAutoplay>
                    <AnimationButton
                        onClick={this.handleOnClick}
                        isAnimationPaused={isAnimationPaused}
                    />
                </StyledAutoplay>
                <StyledImagesUl ref={this.containerRef}>
                    <Provider value={this.state}>{children}</Provider>
                </StyledImagesUl>
                <Indicators
                    carouselChildren={childrenRegistred}
                    onSelect={this.setActiveItem}
                    selectedItem={activeItem}
                />
            </StyledContainer>
        );
    }
}

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
