/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Tabset/context';
import StyledContainer from './styled/container';
import TruncatedText from '../Structural/truncatedText';
import StyledButton from './styled/button';

class TabItem extends Component {
    constructor(props) {
        super(props);
        this.tabRef = React.createRef();
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const { privateRegisterTab, name, disabled } = this.props;
        if (!disabled) {
            setTimeout(() => privateRegisterTab({ name, ref: this.tabRef.current }), 0);
        }
    }

    componentDidUpdate({ name: prevName }) {
        const { name, privateUpdateTab } = this.props;
        if (name !== prevName) {
            privateUpdateTab({ name, ref: this.tabRef.current }, prevName);
        }
    }

    componentWillUnmount() {
        const { privateUnRegisterTab, name } = this.props;
        privateUnRegisterTab(name);
    }

    getTabIndex() {
        if (this.isSelected()) {
            return 0;
        }
        return -1;
    }

    handleSelect(e) {
        const { disabled, onSelect, name } = this.props;
        if (!disabled) {
            onSelect(e, name);
        }
    }

    isSelected() {
        const { activeTabName, name } = this.props;
        return activeTabName === name;
    }

    render() {
        const {
            label,
            style,
            className,
            title,
            id,
            ariaControls,
            fullWidth,
            disabled,
        } = this.props;
        const isActive = this.isSelected();

        return (
            <StyledContainer
                className={className}
                fullWidth={fullWidth}
                isActive={isActive}
                style={style}
                title={title}
                role="presentation"
            >
                <StyledButton
                    role="tab"
                    aria-selected={isActive}
                    onClick={this.handleSelect}
                    tabIndex={this.getTabIndex()}
                    id={id}
                    aria-controls={ariaControls}
                    ref={this.tabRef}
                    isActive={isActive}
                    disabled={disabled}
                    fullWidth={fullWidth}
                    data-active={isActive}
                >
                    <TruncatedText>{label}</TruncatedText>
                </StyledButton>
            </StyledContainer>
        );
    }
}

/** @category Layout */
export default function Tab(props) {
    return <Consumer>{context => <TabItem {...props} {...context} />}</Consumer>;
}

Tab.propTypes = {
    /** The text displayed for the tab item. */
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** The name is used during tabset's onSelect
     * event to determine which tab was clicked. */
    name: PropTypes.string,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies whether this tab should be displayed in a disabled state.
     * Disabled tabs can't be clicked. This value defaults to false. */
    disabled: PropTypes.bool,
    /** This ID is to be associated with the aria-labelledby attribute of the container
     * that show the content of this tab. */
    id: PropTypes.string,
    /** This prop is associated with the id attribute of the container
     * that show the content of this tab. */
    ariaControls: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Tab.defaultProps = {
    label: null,
    name: undefined,
    title: undefined,
    disabled: false,
    id: undefined,
    ariaControls: undefined,
    className: undefined,
    style: undefined,
};
