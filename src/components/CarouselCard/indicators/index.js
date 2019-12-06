/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LEFT_KEY, RIGHT_KEY } from '../../../libs/constants';
import { getItemIndex } from '../utils';
import { getChildTabNodes, insertChildOrderly } from './utils';
import Indicator from './indicator';
import StyledIndicatorUl from '../styled/indicatorsUl';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

export default class Indicators extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.registerIndicator = this.registerIndicator.bind(this);
        this.unregisterIndicator = this.unregisterIndicator.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectIndicator(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectIndicator(LEFT_SIDE),
        };
        this.state = {
            indicatorsRefs: [],
        };
    }

    setAsSelectedIndicator(tabIndex) {
        const { indicatorsRefs } = this.state;
        indicatorsRefs[tabIndex].ref.current.click();
        indicatorsRefs[tabIndex].ref.current.focus();
    }

    registerIndicator(indicator) {
        const { indicatorsRefs } = this.state;
        const [...nodes] = getChildTabNodes(this.container.current);
        const newRefs = insertChildOrderly(indicatorsRefs, indicator, nodes);
        this.setState({ indicatorsRefs: newRefs });
    }

    unregisterIndicator(indicator) {
        const { indicatorsRefs } = this.state;
        const newChildren = indicatorsRefs.filter(child => child.ref !== indicator);
        this.setState({
            indicatorsRefs: newChildren,
        });
    }

    selectIndicator(side) {
        const { selectedItem } = this.props;
        const { indicatorsRefs } = this.state;
        const indicatorIndex = getItemIndex(indicatorsRefs, selectedItem);
        if (indicatorIndex === indicatorsRefs.length - 1 && side === RIGHT_SIDE) {
            this.setAsSelectedIndicator(0);
        } else if (indicatorIndex === 0 && side === LEFT_SIDE) {
            this.setAsSelectedIndicator(indicatorsRefs.length - 1);
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
        return carouselChildren.map(({ ref, ...rest }) => (
            <Indicator
                {...rest}
                onSelect={onSelect}
                selectedItem={selectedItem}
                onCreate={this.registerIndicator}
                onDestroy={this.unregisterIndicator}
                key={rest.indicatorID}
            />
        ));
    }

    render() {
        return (
            <StyledIndicatorUl
                role="tablist"
                onKeyDown={this.handleKeyPressed}
                ref={this.container}
            >
                {this.renderIndicators()}
            </StyledIndicatorUl>
        );
    }
}

Indicators.propTypes = {
    carouselChildren: PropTypes.array,
    onSelect: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicators.defaultProps = {
    carouselChildren: [],
    onSelect: () => {},
    selectedItem: undefined,
};
