/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from './../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import StyledLabelContainer from './styled/labelContainer';
import StyledLabel from './styled/label';
import HiddenElement from '../Structural/hiddenElement';

/**
 * Checkbox toggle is a checkable input that communicates if an option is true,
 * false or indeterminate.
 * @category Form
 */
class CheckboxToggle extends Component {
    constructor(props) {
        super(props);
        this.checkboxToggleRef = React.createRef();
        this.inputIndentifier = props.name || uniqueId('checkbox-toggle');
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.checkboxToggleRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.checkboxToggleRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.checkboxToggleRef.current.blur();
    }

    render() {
        const {
            style,
            className,
            disabled,
            label,
            value,
            onChange,
            onFocus,
            onBlur,
            onClick,
            id,
        } = this.props;

        return (
            <StyledLabelContainer id={id} className={className} style={style}>
                <HiddenElement
                    as="input"
                    type="checkbox"
                    name={this.inputIndentifier}
                    value={this.inputIndentifier}
                    aria-describedby={this.inputIndentifier}
                    checked={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    disabled={disabled}
                    ref={this.checkboxToggleRef}
                />

                <span
                    id={this.inputIndentifier}
                    className="rainbow-checkbox-toggle_faux-container"
                    aria-live="assertive"
                >
                    <span className="rainbow-checkbox-toggle_faux" />
                </span>
                <RenderIf isTrue={!!label}>
                    <StyledLabel>{label}</StyledLabel>
                </RenderIf>
            </StyledLabelContainer>
        );
    }
}

CheckboxToggle.propTypes = {
    /** Text label for the checkbox toggle. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The name of the input */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.bool,
    /** Specifies that the element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

CheckboxToggle.defaultProps = {
    label: null,
    disabled: false,
    value: false,
    name: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
};

export default withReduxForm(CheckboxToggle);
