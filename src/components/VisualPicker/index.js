import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from './../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { uniqueId } from './../../libs/utils';
import { Provider } from './context';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledOptionsContainer from './styled/optionsContainer';
import StyledError from '../Input/styled/errorText';

/**
 * A VisualPicker can be either radio buttons, checkboxes, or links that are visually enhanced.
 * @category Form
 */
class VisualPicker extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error-message');
        this.groupNameId = props.name || uniqueId('visual-picker');
        this.handleChange = this.handleChange.bind(this);
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorId;
        }
        return undefined;
    }

    handleChange(optionName, isChecked) {
        const { onChange, multiple, value } = this.props;
        let currentValue = optionName;
        if (multiple) {
            if (!Array.isArray(value)) {
                currentValue = isChecked ? [optionName] : [];
            } else {
                currentValue = isChecked
                    ? [...value, optionName]
                    : value.filter(item => item !== optionName);
            }
        }
        onChange(currentValue);
    }

    render() {
        const {
            style,
            label,
            required,
            error,
            id,
            children,
            value,
            multiple,
            className,
            size,
        } = this.props;
        const context = {
            ariaDescribedby: this.getErrorMessageId(),
            groupName: this.groupNameId,
            privateOnChange: this.handleChange,
            value,
            multiple,
            size,
        };

        return (
            <StyledContainer id={id} className={className} style={style}>
                <RenderIf isTrue={!!label}>
                    <StyledLabel>
                        <RequiredAsterisk required={required} />
                        {label}
                    </StyledLabel>
                </RenderIf>
                <StyledOptionsContainer>
                    <Provider value={context}>{children}</Provider>
                </StyledOptionsContainer>
                <RenderIf isTrue={!!error}>
                    <StyledError id={this.getErrorMessageId()}>{error}</StyledError>
                </RenderIf>
            </StyledContainer>
        );
    }
}

VisualPicker.propTypes = {
    /** The name of VisualPicker. */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the VisualPicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the VisualPicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an VisualPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The size of the VisualPicker. Valid values are small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
};

VisualPicker.defaultProps = {
    name: null,
    value: undefined,
    id: undefined,
    onChange: () => {},
    required: false,
    label: '',
    error: null,
    className: undefined,
    style: undefined,
    size: 'medium',
    children: [],
    multiple: false,
};

export default withReduxForm(VisualPicker);
