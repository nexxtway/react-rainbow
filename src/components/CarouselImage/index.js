/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import { Consumer } from '../CarouselCard/context';
import { getItemIndex } from '../CarouselCard/utils';
import './styles.css';

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
        return setTimeout(() => privateRegisterChild({
            containerID: this.carouselImageID,
            indicatorID: this.carouselIndicatorID,
            ref: this.itemRef,
            header,
        }), 0);
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames(
            'rainbow-carousel-image_container',
            {
                [`rainbow-carousel-image--slide-in_${this.getAnimationDirection()}`]: this.shouldShow(),
                [`rainbow-carousel-image--slide-out_${this.getAnimationDirection()}`]: this.shouldHide(),
                'rainbow-carousel-image--active': this.shouldBeActive(),
            },
            className,
        );
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
        const { assistiveText, description, header, href, src, style } = this.props;
        const hasContent = !!(header || description);
        return (
            <div
                id={this.carouselImageID}
                className={this.getContainerClassName()}
                role="tabpanel"
                aria-hidden={this.getAriaHidden()}
                aria-labelledby={this.carouselIndicatorID}
                style={style}>
                <a
                    href={href}
                    className="rainbow-carousel-image"
                    tabIndex={this.getTabIndex()}
                    ref={this.itemRef}>
                    <div>
                        <img className="rainbow-carousel-image_image" src={src} alt={assistiveText} />
                    </div>
                    <RenderIf isTrue={hasContent}>
                        <div className="rainbow-carousel-image_content">
                            <RenderIf isTrue={!!header}>
                                <h2 className="rainbow-carousel-image_content-title">{header}</h2>
                            </RenderIf>
                            <RenderIf isTrue={!!description}>
                                <p>{description}</p>
                            </RenderIf>
                        </div>
                    </RenderIf>
                </a>
            </div>
        );
    }
}

export default function CarouselImage(props) {
    return (
        <Consumer>
            {value => (
                <Item {...props} {...value} />
            )}
        </Consumer>
    );
}

CarouselImage.propTypes = {
    /** The URL for the image. */
    src: PropTypes.string,
    /** The header can include text or another component,
     * and is displayed in the top of the content section. */
    header: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The description can include text or another component,
     * and is displayed below the header in the content section. */
    description: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
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
