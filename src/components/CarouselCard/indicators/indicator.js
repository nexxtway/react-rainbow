/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from '../../AssistiveText';

function getAssistiveText(header) {
    if (typeof header === 'string') {
        return `${header} Tab`;
    }
    return undefined;
}

export default class Indicator extends Component {
    constructor(props) {
        super(props);
        this.indicatorRef = React.createRef();
    }

    getIndicatorClassName(id) {
        return classnames('rainbow-carousel_indicator', {
            'rainbow-carousel_indicator--active': this.isSelected(id),
        });
    }

    getTabIndex(id) {
        if (this.isSelected(id)) {
            return 0;
        }
        return -1;
    }

    isSelected(id) {
        const { selectedItem } = this.props;
        return selectedItem === id;
    }

    select() {
        this.indicatorRef.current.click();
        this.indicatorRef.current.focus();
    }

    render() {
        const { indicatorID, containerID, header, onSelect } = this.props;
        const assistiveText = getAssistiveText(header);
        return (
            <li className="rainbow-carousel_indicators-container" role="presentation" key={indicatorID}>
                <a
                    id={indicatorID}
                    className={this.getIndicatorClassName(indicatorID)}
                    href="javascript:void(0);"
                    role="tab"
                    tabIndex={this.getTabIndex(indicatorID)}
                    aria-selected={this.isSelected(indicatorID)}
                    aria-controls={containerID}
                    title={assistiveText}
                    onClick={() => onSelect(indicatorID)}
                    ref={this.indicatorRef}>
                    <AssistiveText text={assistiveText} />
                </a>
            </li>
        );
    }
}

Indicator.propTypes = {
    indicatorID: PropTypes.string,
    containerID: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onSelect: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicator.defaultProps = {
    indicatorID: undefined,
    containerID: undefined,
    header: undefined,
    onSelect: () => {},
    selectedItem: undefined,
};
