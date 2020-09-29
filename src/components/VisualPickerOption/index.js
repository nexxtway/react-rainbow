/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import {
    StyledCheckmarkIcon,
    StyledContainer,
    StyledInput,
    StyledLabel,
    StyledContent,
    StyledCheckedTriangle,
    StyledFooter,
} from './styled';
import { Consumer as VisualPickerConsumer } from '../InternalUniversalPicker/context';
import { useUniqueIdentifier } from '../../libs/hooks';

const PickerOption = props => {
    const {
        name,
        disabled,
        children,
        footer,
        style,
        className,
        size,
        multiple,
        value,
        onChange,
        groupName,
        ariaDescribedby,
    } = props;

    const type = multiple ? 'checkbox' : 'radio';

    const inputId = useUniqueIdentifier('visual-picker_option');

    const isChecked = () => {
        if (multiple) {
            return Array.isArray(value) && value.includes(name);
        }

        return typeof value === 'string' && name === value;
    };

    return (
        <StyledContainer
            data-id="visual-picker_option-container"
            className={className}
            style={style}
        >
            <StyledInput
                as="input"
                type={type}
                id={inputId}
                name={groupName}
                checked={isChecked()}
                aria-describedby={ariaDescribedby}
                onChange={event => onChange(name, event.target.checked)}
                disabled={disabled}
            />

            <StyledLabel data-id="visual-picker_option-label" htmlFor={inputId}>
                <StyledContent data-id="visual-picker_option" size={size}>
                    <RenderIf isTrue={isChecked()}>
                        <StyledCheckedTriangle />
                        <StyledCheckmarkIcon />
                    </RenderIf>
                    {children}
                </StyledContent>
                <RenderIf isTrue={footer}>
                    <StyledFooter>{footer}</StyledFooter>
                </RenderIf>
            </StyledLabel>
        </StyledContainer>
    );
};

/**
 * A VisualPickerOption.
 * @category Form
 */
export default function VisualPickerOption(props) {
    return (
        <VisualPickerConsumer>
            {context => <PickerOption {...props} {...context} />}
        </VisualPickerConsumer>
    );
}

VisualPickerOption.propTypes = {
    /** It is a unique value that identifies the picker option. */
    name: PropTypes.string,
    /** It is what will be displayed at the bottom of the component. */
    footer: PropTypes.node,
    /** Specifies that an VisualPickerOption element should be disabled.
     * This value defaults to false. */
    disabled: PropTypes.bool,
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

VisualPickerOption.defaultProps = {
    name: undefined,
    footer: undefined,
    disabled: false,
    className: undefined,
    style: undefined,
    children: [],
};
