import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from './../../../libs/utils';
import RenderIf from './../../RenderIf';
import Label from '../checkboxRadioLabel';
import InlineBlockElement from '../../Structural/inlineBlockElement';
import StyledContainer from '../styled/container';
import HelpText from '../styled/helpText';
import ErrorText from '../styled/errorText';
import StyledRadioInput from './styled/radio';

export default class InputRadio extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input-radio');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
    }

    getInlineTextLabelId() {
        const { bottomHelpText } = this.props;
        if (bottomHelpText) {
            return this.inlineTextLabelId;
        }
        return undefined;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
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
            className,
            style,
            value,
            onChange,
            label,
            error,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onKeyDown,
            bottomHelpText,
            id,
            name,
            checked,
            hideLabel,
        } = this.props;

        return (
            <StyledContainer id={id} className={className} style={style}>
                <InlineBlockElement>
                    <StyledRadioInput
                        as="input"
                        id={this.inputId}
                        name={name}
                        type="radio"
                        value={value}
                        onChange={onChange}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        disabled={disabled}
                        checked={checked}
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()}
                        ref={this.inputRef}
                        error={error}
                    />

                    <Label
                        disabled={disabled}
                        label={label}
                        hideLabel={hideLabel}
                        inputId={this.inputId}
                        id={this.getInlineTextLabelId()}
                    />
                </InlineBlockElement>
                <RenderIf isTrue={!!bottomHelpText}>
                    <HelpText alignSelf="flex-start">{bottomHelpText}</HelpText>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <ErrorText alignSelf="flex-start" id={this.getErrorMessageId()}>
                        {error}
                    </ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

InputRadio.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    checked: PropTypes.bool,
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
};

InputRadio.defaultProps = {
    value: undefined,
    label: undefined,
    name: undefined,
    bottomHelpText: null,
    error: null,
    disabled: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    checked: undefined,
    hideLabel: false,
    className: undefined,
    style: undefined,
    id: undefined,
};
