import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import { Provider } from './context';
import { StyledButtonGroup, StyledContainer, StyledErrorText, StyledHelpText } from './styled';

/**
 * ButtonGroupPicker can be used to group related options. The ButtonGroupPicker will control the selected state of its child ButtonOption.
 * @category Form
 */
class ButtonGroupPicker extends Component {
    constructor(props) {
        super(props);
        const { name } = this.props;
        this.groupNameId = name || uniqueId('options');
        this.errorMessageId = uniqueId('error-message');
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    getContext() {
        const { multiple, size, value, variant } = this.props;
        return {
            onChange: this.handleOnChange,
            values: value,
            type: multiple ? 'checkbox' : 'radio',
            name: this.groupNameId,
            ariaDescribedBy: this.getErrorMessageId(),
            size,
            variant,
        };
    }

    handleOnChange(event) {
        const { value: eventValue, checked } = event.target;
        const { value, multiple, onChange } = this.props;

        if (!multiple) {
            return onChange(eventValue);
        }

        if (checked && Array.isArray(value)) {
            return onChange(value.concat([eventValue]));
        }
        if (checked && !Array.isArray(value)) {
            return onChange([eventValue]);
        }
        return onChange(value.filter(valueId => valueId !== eventValue));
    }

    render() {
        const {
            id,
            className,
            style,
            label,
            children,
            error,
            bottomHelpText,
            required,
            labelAlignment,
            hideLabel,
            variant,
            borderRadius,
        } = this.props;
        const context = this.getContext();

        return (
            <StyledContainer
                id={id}
                className={className}
                style={style}
                borderRadius={borderRadius}
            >
                <RenderIf isTrue={label}>
                    <Label
                        label={label}
                        labelAlignment={labelAlignment}
                        hideLabel={hideLabel}
                        required={required}
                        as="legend"
                    />
                </RenderIf>
                <StyledButtonGroup variant={variant} borderRadius={borderRadius}>
                    <Provider value={context}>{children}</Provider>
                </StyledButtonGroup>
                <RenderIf isTrue={bottomHelpText}>
                    <StyledHelpText>{bottomHelpText}</StyledHelpText>
                </RenderIf>
                <RenderIf isTrue={error}>
                    <StyledErrorText id={this.getErrorMessageId()}>{error}</StyledErrorText>
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
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The title at the top of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the ButtonGroupPicker label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the ButtonGroupPicker label. */
    hideLabel: PropTypes.bool,
    /** The name of the ButtonOption selected or if multiple an array of names. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    /** Set to true if at least one option must be selected. This value defaults to false. */
    required: PropTypes.bool,
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
    name: PropTypes.string,
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
    /** The variant changes the appearance of the ButtonGroupPicker. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
    /** The border radius of the button. Valid values are square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-rounded', 'rounded']),
};

ButtonGroupPicker.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    label: undefined,
    value: undefined,
    required: false,
    onChange: () => {},
    multiple: false,
    name: undefined,
    size: 'medium',
    error: undefined,
    bottomHelpText: undefined,
    children: undefined,
    labelAlignment: 'center',
    variant: 'default',
    hideLabel: false,
    borderRadius: 'rounded',
};

export default withReduxForm(ButtonGroupPicker);
export { ButtonGroupPicker as Component };
