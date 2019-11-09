/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../../AssistiveText';
import StyledIndicatorLi from '../styled/indicatorLi';
import StyledIndicatorButton from '../styled/indicatorButton';

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

    componentDidMount() {
        const { onCreate, indicatorID } = this.props;
        onCreate({
            indicatorID,
            ref: this.indicatorRef,
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

    render() {
        const { indicatorID, containerID, header, onSelect } = this.props;
        const assistiveText = getAssistiveText(header);
        return (
            <StyledIndicatorLi role="presentation" key={indicatorID}>
                <StyledIndicatorButton
                    id={indicatorID}
                    isSelected={this.isSelected(indicatorID)}
                    role="tab"
                    tabIndex={this.getTabIndex(indicatorID)}
                    aria-selected={this.isSelected(indicatorID)}
                    aria-controls={containerID}
                    title={assistiveText}
                    onClick={() => onSelect(indicatorID)}
                    ref={this.indicatorRef}
                >
                    <AssistiveText text={assistiveText} />
                </StyledIndicatorButton>
            </StyledIndicatorLi>
        );
    }
}

Indicator.propTypes = {
    indicatorID: PropTypes.string,
    containerID: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onSelect: PropTypes.func,
    onCreate: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicator.defaultProps = {
    indicatorID: undefined,
    containerID: undefined,
    header: undefined,
    onSelect: () => {},
    onCreate: () => {},
    selectedItem: undefined,
};
