import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import formatValue from './helpers/formatValue';
import RenderIf from '../RenderIf/index';
import StyledReadOnlySelectedInput from './styled/input';
import StyledSelectedValueIcon from './styled/selectedValueIcon';
import StyledSelectedValueContainer from './styled/selectedValueContainer';
import { StyledCombobox, StyledInput } from '../MultiSelect/styled';
import StyledChip from './styled/chip';
import StyledSelectedIconContainer from './styled/selectedIconContainer';

export default class SelectedValue extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleFocus() {
        const { value } = this.props;
        const { label } = formatValue(value);
        copy(label);
    }

    handleClick(event) {
        const { disabled, onClick } = this.props;
        if (!disabled) {
            this.inputRef.current.focus();
        }

        onClick(event);
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    render() {
        const {
            value,
            disabled,
            readOnly,
            onClearValue,
            id,
            name,
            tabIndex,
            required,
            onClick,
            errorMessageId,
            error,
            borderRadius,
        } = this.props;
        const { label, icon } = formatValue(value);

        return (
            <StyledSelectedValueContainer readOnly={readOnly}>
                <RenderIf isTrue={readOnly || disabled}>
                    <RenderIf isTrue={icon}>
                        <StyledSelectedValueIcon readOnly={readOnly}>
                            {icon}
                        </StyledSelectedValueIcon>
                        <StyledReadOnlySelectedInput
                            id={id}
                            name={name}
                            type="text"
                            value={label}
                            tabIndex={tabIndex}
                            onFocus={this.handleFocus}
                            onClick={onClick}
                            disabled={disabled}
                            readOnly={readOnly}
                            aria-describedby={errorMessageId}
                            required={required}
                            ref={this.inputRef}
                            iconPosition="left"
                            icon={icon}
                            error={error}
                            borderRadius={borderRadius}
                        />
                    </RenderIf>
                </RenderIf>
                <RenderIf isTrue={!(readOnly || disabled)}>
                    <StyledCombobox
                        error={error}
                        disabled={disabled}
                        borderRadius={borderRadius}
                        onClick={this.handleClick}
                    >
                        <StyledInput
                            id={id}
                            role="textbox"
                            aria-autocomplete="none"
                            tabIndex={tabIndex}
                            disabled={disabled}
                            ref={this.inputRef}
                            onFocus={this.handleFocus}
                            value={label}
                            type="text"
                            readOnly
                        />
                        <StyledChip
                            label={
                                <span>
                                    <RenderIf isTrue={icon}>
                                        <StyledSelectedIconContainer>
                                            {icon}
                                        </StyledSelectedIconContainer>
                                    </RenderIf>
                                    {label}
                                </span>
                            }
                            onDelete={onClearValue}
                            borderRadius={borderRadius}
                        />
                    </StyledCombobox>
                </RenderIf>
            </StyledSelectedValueContainer>
        );
    }
}

SelectedValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            icon: PropTypes.node,
        }),
        PropTypes.string,
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onClearValue: PropTypes.func,
    errorMessageId: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

SelectedValue.defaultProps = {
    value: undefined,
    name: undefined,
    id: undefined,
    disabled: false,
    required: false,
    readOnly: false,
    tabIndex: undefined,
    onClick: () => {},
    onClearValue: undefined,
    errorMessageId: undefined,
    error: undefined,
    borderRadius: 'rounded',
};
