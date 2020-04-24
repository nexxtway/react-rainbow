import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from './../../libs/hocs/withReduxForm';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import Options from './options';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledInnerContainer from './styled/innerContainer';
import StyledSelect from './styled/select';
import ErrorText from '../../components/Input/styled/errorText';
import HelpText from '../../components/Input/styled/helpText';

/**
 * Select element presents a menu of options.
 * @category Form
 */
class Select extends Component {
    constructor(props) {
        super(props);
        this.selectId = uniqueId('select');
        this.selectRef = React.createRef();
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.selectRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.selectRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.selectRef.current.blur();
    }

    render() {
        const {
            label,
            value,
            onChange,
            onFocus,
            onBlur,
            onClick,
            bottomHelpText,
            error,
            required,
            disabled,
            options,
            style,
            className,
            id,
            name,
            hideLabel,
        } = this.props;

        return (
            <StyledContainer className={className} style={style} id={id}>
                <StyledLabel hideLabel={hideLabel} htmlFor={this.selectId}>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
                <StyledInnerContainer error={error} disabled={disabled}>
                    <StyledSelect
                        error={error}
                        id={this.selectId}
                        name={name}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        value={value}
                        required={required}
                        disabled={disabled}
                        ref={this.selectRef}
                    >
                        <Options options={options} />
                    </StyledSelect>
                </StyledInnerContainer>
                <RenderIf isTrue={!!bottomHelpText}>
                    <HelpText>{bottomHelpText}</HelpText>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <ErrorText>{error}</ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Select.propTypes = {
    /** Text label for the select. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The name of the select. */
    name: PropTypes.string,
    /** Specifies the selected value. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The action triggered when a option item is selected. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Shows the help message below the Select. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The option items to be displayed. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            disabled: PropTypes.bool,
        }),
    ),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The id of the outer element. */
    hideLabel: PropTypes.bool,
};

Select.defaultProps = {
    label: undefined,
    value: undefined,
    name: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    bottomHelpText: null,
    error: null,
    required: false,
    disabled: false,
    options: [],
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
};

export default withReduxForm(Select);
