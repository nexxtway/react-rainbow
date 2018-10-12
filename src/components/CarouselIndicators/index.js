/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';
import { getSelectedItemIndex } from '../CarouselCard/utils';
import Indicator from './indicator';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectIndicator(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectIndicator(LEFT_SIDE),
        };
    }

    setAsSelectedIndicator(tabIndex) {
        this.indicatorsRefs[tabIndex].ref.current.select();
    }

    selectIndicator(side) {
        const { selectedItem } = this.props;
        const indicatorIndex = getSelectedItemIndex(this.indicatorsRefs, selectedItem);
        if (indicatorIndex === this.indicatorsRefs.length - 1 && side === RIGHT_SIDE) {
            this.setAsSelectedIndicator(0);
        } else if (indicatorIndex === 0 && side === LEFT_SIDE) {
            this.setAsSelectedIndicator(this.indicatorsRefs.length - 1);
        } else {
            this.setAsSelectedIndicator(indicatorIndex + side);
        }
    }

    handleKeyPressed(event) {
        if (this.keyHandlerMap[event.keyCode]) {
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    isSelected(id) {
        const { selectedItem } = this.props;
        return selectedItem === id;
    }

    renderIndicators() {
        const { carouselChildren, onSelect, selectedItem } = this.props;
        this.indicatorsRefs = [];
        return carouselChildren.map((child) => {
            const indicatorRef = React.createRef();
            this.indicatorsRefs.push({
                indicatorID: child.indicatorID,
                ref: indicatorRef,
            });
            return (
                <Indicator
                    {...child}
                    onSelect={onSelect}
                    selectedItem={selectedItem}
                    ref={indicatorRef} />
            );
        });
    }

    render() {
        return (
            <ul className="rainbow-carousel_indicators" role="tablist" onKeyDown={this.handleKeyPressed}>
                {this.renderIndicators()}
            </ul>
        );
    }
}

Index.propTypes = {
    carouselChildren: PropTypes.array,
    onSelect: PropTypes.func,
    selectedItem: PropTypes.string,
};

Index.defaultProps = {
    carouselChildren: [],
    onSelect: () => {},
    selectedItem: undefined,
};
