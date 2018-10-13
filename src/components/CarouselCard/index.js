/* eslint-disable no-script-url,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import Indicators from './indicators';
import AnimationButton from './animationButton';
import { getItemIndex, getChildTabNodes, insertChildOrderly } from './utils';
import './styles.css';

/**
* A carouselCard allows multiple pieces of featured content to occupy an allocated amount of space.
*/
export default class CarouselCard extends Component {
    constructor(props) {
        super(props);
        this.registerChild = this.registerChild.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            childrenRegistred: [],
            activeItem: undefined,
            isAnimationPaused: this.props.disableAutoScroll,
            privateRegisterChild: this.registerChild,
        };
        this.cardPosition = { transform: 'translateX(-0%)' };
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.startAnimation();
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-carousel', className);
    }

    setActiveItem(id) {
        const { childrenRegistred } = this.state;
        const selectedItemIndex = getItemIndex(childrenRegistred, id);
        this.cardPosition = { transform: `translateX(-${selectedItemIndex}00%)` };
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
                    this.cardPosition = { transform: `translateX(-${nextItem}00%)` };
                    this.startAnimation();
                    this.setState({ activeItem: childrenRegistred[nextItem].indicatorID });
                }
            }
        }, (scrollDuration * 1000));
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
        this.setState({ childrenRegistred: newChildren, activeItem: newChildren[0].indicatorID });
    }

    render() {
        const { children, style, id } = this.props;
        const { childrenRegistred, activeItem, isAnimationPaused } = this.state;
        return (
            <div className={this.getContainerClassName()} style={style} id={id}>
                <span className="rainbow-carousel_autoplay">
                  <AnimationButton onClick={this.handleOnClick} isAnimationPaused={isAnimationPaused} />
                </span>
                <div className="rainbow-carousel_images" style={this.cardPosition} ref={this.containerRef}>
                    <Provider value={this.state}>
                        {children}
                    </Provider>
                </div>
                <Indicators
                    carouselChildren={childrenRegistred}
                    onSelect={this.setActiveItem}
                    selectedItem={activeItem} />
            </div>
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
