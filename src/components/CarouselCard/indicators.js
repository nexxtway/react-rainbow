/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from '../AssistiveText';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

function getAssistiveText(header) {
    if (typeof header === 'string') {
        return `${header} Tab`;
    }
    return undefined;
}

export default class Indicators extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectIndicator(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectIndicator(LEFT_SIDE),
        };
    }

    getIndicatorClassName(id) {
        return classnames('rainbow-carousel-indicator', {
            'rainbow-carousel-indicator_active': this.isSelected(id),
        });
    }

    getTabIndex(id) {
        if (this.isSelected(id)) {
            return 0;
        }
        return -1;
    }

    setAsSelectedIndicator(tabIndex) {
        this.indicatorsRefs[tabIndex].ref.current.click();
        this.indicatorsRefs[tabIndex].ref.current.focus();
    }

    selectIndicator(side) {
        const { selectedItem } = this.props;
        const indicatorIndex = this.indicatorsRefs.findIndex(item => (
            item.indicatorID === selectedItem
        ));

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
        const { carouselChildren, onSelect } = this.props;
        this.indicatorsRefs = [];
        return carouselChildren.map(({ containerID, indicatorID, header }) => {
            const indicatorRef = React.createRef();
            this.indicatorsRefs.push({
                indicatorID,
                ref: indicatorRef,
            });
            return (
                <li className="rainbow-carousel-indicators-container" role="presentation" key={indicatorID}>
                    <a
                        id={indicatorID}
                        className={this.getIndicatorClassName(indicatorID)}
                        href="javascript:void(0);"
                        role="tab"
                        tabIndex={this.getTabIndex(indicatorID)}
                        aria-selected={this.isSelected(indicatorID)}
                        aria-controls={containerID}
                        title={getAssistiveText(header)}
                        onClick={() => onSelect(indicatorID)}
                        ref={indicatorRef}>
                        <AssistiveText text={getAssistiveText(header)} />
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="rainbow-carousel-indicators" role="tablist" onKeyDown={this.handleKeyPressed}>
                {this.renderIndicators()}
            </ul>
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
