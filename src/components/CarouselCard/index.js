/* eslint-disable no-script-url,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import './styles.css';
import Indicators from './indicators';
import PlayIcon from './playIcon';
import PauseIcon from './pauseIcon';
import ButtonIcon from '../ButtonIcon';

export default class CarouselCard extends Component {
    constructor(props) {
        super(props);
        this.registerChild = this.registerChild.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            childrenRegistred: [],
            activeItem: undefined,
            playAnimation: !this.props.disableAutoScroll,
            privateRegisterChild: this.registerChild,
        };
        this.cardPosition = { transform: 'translateX(-0%)' };
    }

    componentDidMount() {
        this.startAnimation();
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-carousel', className);
    }

    getSelectedItemIndex(id) {
        const { childrenRegistred, activeItem } = this.state;
        const idToCheck = id || activeItem;
        return childrenRegistred.findIndex(child => child.indicatorID === idToCheck);
    }

    getAnimationButtonIcon() {
        const { playAnimation } = this.state;
        if (!playAnimation) {
            return <PlayIcon />;
        }
        return <PauseIcon />;
    }

    getAnimationButtonAssistiveText() {
        const { playAnimation } = this.state;
        if (playAnimation) {
            return 'Stop auto-play';
        }
        return 'Start auto-play';
    }

    setActiveItem(id) {
        const selectedItemIndex = this.getSelectedItemIndex(id);
        this.cardPosition = { transform: `translateX(-${selectedItemIndex}00%)` };
        this.setState({ activeItem: id });
    }

    startAnimation() {
        const { scrollDuration, disableAutoRefresh } = this.props;
        setTimeout(() => {
            const { playAnimation } = this.state;
            if (playAnimation) {
                const { childrenRegistred } = this.state;
                const selectedItemIndex = this.getSelectedItemIndex();
                const isLastItem = selectedItemIndex === childrenRegistred.length - 1;
                const nextItem = isLastItem ? 0 : selectedItemIndex + 1;
                if (!(isLastItem && disableAutoRefresh)) {
                    this.cardPosition = { transform: `translateX(-${nextItem}00%)` };
                    this.startAnimation();
                    this.setState({ activeItem: childrenRegistred[nextItem].indicatorID });
                } else {
                    this.setState({ playAnimation: false });
                }
            }
        }, (scrollDuration * 1000));
    }

    handleOnClick() {
        const { playAnimation } = this.state;
        if (!playAnimation) {
            this.startAnimation();
        }
        this.setState({ playAnimation: !playAnimation });
    }

    registerChild(child) {
        const { childrenRegistred } = this.state;
        const newChilds = childrenRegistred.concat([child]);
        this.setState({ childrenRegistred: newChilds, activeItem: newChilds[0].indicatorID });
    }

    render() {
        const { children, style } = this.props;
        const { childrenRegistred, activeItem } = this.state;
        return (
            <div className={this.getContainerClassName()} style={style}>
                <span className="rainbow-carousel-autoplay">
                  <ButtonIcon
                      variant="border"
                      size="small"
                      icon={this.getAnimationButtonIcon()}
                      onClick={this.handleOnClick}
                      assistiveText={this.getAnimationButtonAssistiveText()} />
                </span>
                <div className="rainbow-carousel-images" style={this.cardPosition}>
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
};

CarouselCard.defaultProps = {
    scrollDuration: 5,
    disableAutoScroll: false,
    disableAutoRefresh: false,
    className: undefined,
    style: undefined,
    children: null,
};
