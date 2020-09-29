/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { StyledContainer, StyledLabel, StyledOptionsContainer } from './styled';
import StyledError from '../Input/styled/errorText';
import { useUniqueIdentifier, useErrorMessageId, useReduxForm } from '../../libs/hooks';
import InternalUniversalPicker from '../InternalUniversalPicker';

/**
 * A VisualPicker can be either radio buttons, checkboxes, or links that are visually enhanced.
 * @category Form
 */
export default function VisualPicker(props) {
    const {
        name,
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
        onChange,
    } = useReduxForm(props);

    const nameUnique = useUniqueIdentifier('visual-picker');
    const groupName = name || nameUnique;
    const errorMessageId = useErrorMessageId(error);

    return (
        <StyledContainer id={id} className={className} style={style}>
            <RenderIf isTrue={label}>
                <StyledLabel>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
            </RenderIf>
            <StyledOptionsContainer>
                <InternalUniversalPicker
                    value={value}
                    onChange={onChange}
                    multiple={multiple}
                    ariaDescribedby={errorMessageId}
                    groupName={groupName}
                    size={size}
                >
                    {children}
                </InternalUniversalPicker>
            </StyledOptionsContainer>
            <RenderIf isTrue={error}>
                <StyledError id={errorMessageId}>{error}</StyledError>
            </RenderIf>
        </StyledContainer>
    );
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
