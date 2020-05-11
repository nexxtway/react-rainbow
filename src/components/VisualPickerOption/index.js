/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer as VisualPickerConsumer } from '../VisualPicker/context';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import StyledCheckmarkIcon from './styled/checkmarkIcon';
import StyledContainer from './styled/container';
import StyledInput from './styled/input';
import StyledLabel from './styled/label';
import StyledContent from './styled/content';
import StyledCheckedTriangle from './styled/checkedTriangle';
import StyledFooter from './styled/footer';

class PickerOption extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('radio');
        this.handleChange = this.handleChange.bind(this);
    }

    getType() {
        const { multiple } = this.props;
        if (multiple) {
            return 'checkbox';
        }
        return 'radio';
    }

    isChecked() {
        const { multiple, name, value } = this.props;
        if (multiple) {
            return Array.isArray(value) && value.includes(name);
        }

        return typeof value === 'string' && name === value;
    }

    handleChange(event) {
        const { name, privateOnChange } = this.props;
        privateOnChange(name, event.target.checked);
    }

    render() {
        const { disabled, children, footer, style, className, size } = this.props;
        const { groupName, ariaDescribedby } = this.props;

        return (
            <StyledContainer
                data-id="visual-picker_option-container"
                className={className}
                style={style}
            >
                <StyledInput
                    as="input"
                    type={this.getType()}
                    id={this.inputId}
                    name={groupName}
                    checked={this.isChecked()}
                    aria-describedby={ariaDescribedby}
                    onChange={this.handleChange}
                    disabled={disabled}
                />

                <StyledLabel data-id="visual-picker_option-label" htmlFor={this.inputId}>
                    <StyledContent data-id="visual-picker_option" size={size}>
                        <RenderIf isTrue={this.isChecked()}>
                            <StyledCheckedTriangle />
                            <StyledCheckmarkIcon />
                        </RenderIf>
                        {children}
                    </StyledContent>
                    <RenderIf isTrue={!!footer}>
                        <StyledFooter>{footer}</StyledFooter>
                    </RenderIf>
                </StyledLabel>
            </StyledContainer>
        );
    }
}

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
