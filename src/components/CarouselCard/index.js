/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import './styles.css';
import Indicators from './indicators';

export default class CarouselCard extends Component {
    constructor(props) {
        super(props);
        this.registerChild = this.registerChild.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.state = {
            childs: [],
            activeItem: undefined,
            privateRegisterChild: this.registerChild,
        };
        this.cardPosition = { transform: 'translateX(-0%)' };
    }

    componentDidMount() {
        // setTimeout(this.startAnimation, 500);
        this.startAnimation();
    }

    setActiveItem(id) {
        const { childs } = this.state;
        const selectedItemIndex = childs.findIndex(child => child.indicatorID === id);
        this.cardPosition = { transform: `translateX(-${selectedItemIndex}00%)` };
        this.setState({ activeItem: id });
    }

    startAnimation() {
        return setTimeout(() => {
            const { childs, activeItem } = this.state;
            const selectedItemIndex = childs.findIndex(child => child.indicatorID === activeItem);
            const nextItem = selectedItemIndex === childs.length - 1 ? 0 : selectedItemIndex + 1;
            this.cardPosition = { transform: `translateX(-${nextItem}00%)` };
            this.startAnimation();
            this.setState({ activeItem: childs[nextItem].indicatorID });
        }, 3000);
    }

    registerChild(child) {
        const { childs } = this.state;
        const newChilds = childs.concat([child]);
        this.setState({ childs: newChilds, activeItem: newChilds[0].indicatorID });
    }

    render() {
        const { children } = this.props;
        const { childs, activeItem } = this.state;
        return (
            <div className="rainbow-carousel">
                <div className="rainbow-carousel__stage">
                    <div className="rainbow-carousel__panels" style={this.cardPosition}>
                        <Provider value={this.state}>
                            {children}
                        </Provider>
                    </div>
                    <ul className="rainbow-carousel__indicators" role="tablist">
                        <Indicators
                            carouselChilds={childs}
                            onSelect={this.setActiveItem}
                            selectedItem={activeItem} />
                    </ul>
                </div>
            </div>
        );
    }
}

CarouselCard.propTypes = {
    children: PropTypes.node,
};

CarouselCard.defaultProps = {
    children: null,
};
