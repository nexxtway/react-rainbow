import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Label from '../checkboxRadioLabel';
import StyledContainer from './styled/container';
import StyledCheckboxInput from './styled/checkbox';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input-checkbox');
        this.inputRef = React.createRef();
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
            name,
            value,
            onChange,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onKeyDown,
            disabled,
            checked,
            ariaLabelledBy,
            ariaDescribedBy,
            error,
            label,
            hideLabel,
        } = this.props;

        return (
            <StyledContainer data-id="input-checkbox_container">
                <StyledCheckboxInput
                    as="input"
                    id={this.inputId}
                    name={name}
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                    checked={checked}
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={ariaDescribedBy}
                    ref={this.inputRef}
                    error={error}
                />
                <Label
                    label={label}
                    hideLabel={hideLabel}
                    disabled={disabled}
                    inputId={this.inputId}
                    id={ariaLabelledBy}
                />
            </StyledContainer>
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
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
    ariaLabelledBy: PropTypes.string,
    ariaDescribedBy: PropTypes.string,
};

Checkbox.defaultProps = {
    value: undefined,
    label: undefined,
    name: undefined,
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
    ariaLabelledBy: undefined,
    ariaDescribedBy: undefined,
};
