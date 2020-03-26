import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import StyledButtonGroup from './styled/buttonGroup';
import StyledLegend from './styled/label';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import RenderIf from '../RenderIf';
import HelpText from './styled/helpText';
import ErrorText from './styled/errorText';

/**
 * ButtonGroupPicker can be used to group related options. The ButtonGroupPicker will control the selected state of its child ButtonOption.
 */
class ButtonGroupPicker extends Component {
    constructor(props) {
        super(props);
        this.groupNameId = this.props.name || uniqueId('options');
        this.errorMessageId = uniqueId('error-message');
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getValue() {
        const { value } = this.props;
        if (typeof value === 'string') {
            return [];
        }
        return value;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    handleOnChange(event) {
        const { value, checked } = event.target;
        const { value: values, multiple, onChange } = this.props;

        if (!multiple) {
            return onChange([value]);
        }

        if (checked && Array.isArray(values)) {
            return onChange(values.concat([value]));
        }
        if (checked && !Array.isArray(values)) {
            return onChange([value]);
        }
        return onChange(values.filter(valueId => valueId !== value));
    }

    render() {
        const {
            name,
            className,
            style,
            label,
            multiple,
            children,
            size,
            error,
            bottomHelpText,
        } = this.props;

        const context = {
            onChange: this.handleOnChange,
            values: this.getValue(),
            type: multiple ? 'checkbox' : 'radio',
            name: name || uniqueId('option'),
            ariaDescribedBy: this.getErrorMessageId(),
        };

        return (
            <StyledContainer className={className} style={style}>
                <RenderIf isTrue={!!label}>
                    <StyledLegend>{label}</StyledLegend>
                </RenderIf>
                <StyledButtonGroup size={size} role="group">
                    <Provider value={{ ...context }}>{children}</Provider>
                </StyledButtonGroup>
                <RenderIf isTrue={!!bottomHelpText}>
                    <HelpText alignSelf="center">{bottomHelpText}</HelpText>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <ErrorText id={this.getErrorMessageId()}>{error}</ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

ButtonGroupPicker.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with a custom style applied to the outer element. */
    style: PropTypes.object,
    /** The title at the top of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The name of the ButtonOption selected or if multiple an array of names. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    /** It will fire when selected option(s) can change based on user interactions. */
    onChange: PropTypes.func,
    /**
     * If true then multiple selections are allowed.
     * Defaults to false.
     */
    multiple: PropTypes.bool,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The name of the options inside the form. */
    name: PropTypes.string.isRequired,
    /**
     * The size of the ButtonOption.
     * Options includes x-small, small, medium and large.
     * This value defaults to medium.
     */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** pecifies that a ButtonGroupPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Shows the help message below the ButtonGroupPicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

ButtonGroupPicker.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    value: [],
    onChange: () => {},
    multiple: false,
    name: undefined,
    size: 'medium',
    error: undefined,
    bottomHelpText: undefined,
    children: undefined,
};

export default ButtonGroupPicker;
