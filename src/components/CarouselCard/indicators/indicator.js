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
        const { onCreate, id } = this.props;
        onCreate({
            id,
            ref: this.indicatorRef,
        });
    }

    componentWillUnmount() {
        const { onDestroy } = this.props;
        onDestroy(this.indicatorRef);
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
        const { id, containerID, header, onSelect } = this.props;
        const assistiveText = getAssistiveText(header);
        const isSelected = this.isSelected(id);
        return (
            <StyledIndicatorLi role="presentation" key={id}>
                <StyledIndicatorButton
                    id={id}
                    isSelected={isSelected}
                    role="tab"
                    tabIndex={this.getTabIndex(id)}
                    aria-selected={isSelected}
                    aria-controls={containerID}
                    title={assistiveText}
                    onClick={() => onSelect(id)}
                    ref={this.indicatorRef}
                >
                    <AssistiveText text={assistiveText} />
                </StyledIndicatorButton>
            </StyledIndicatorLi>
        );
    }
}

Indicator.propTypes = {
    id: PropTypes.string,
    containerID: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onSelect: PropTypes.func,
    onCreate: PropTypes.func,
    onDestroy: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicator.defaultProps = {
    id: undefined,
    containerID: undefined,
    header: undefined,
    onSelect: () => {},
    onCreate: () => {},
    onDestroy: () => {},
    selectedItem: undefined,
};
