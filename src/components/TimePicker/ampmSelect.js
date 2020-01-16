import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from './../../libs/utils';
import isChecked from './helpers/isChecked';
import StyledInputHidden from './styled/inputHidden';
import StyledOptionLabel from './styled/optionLabel';
import StyledSelectValue from './styled/selectValue';

function handleAmPmBlur(event) {
    event.stopPropagation();
}

export default class AmPmSelect extends PureComponent {
    constructor(props) {
        super(props);
        this.fieldsetRef = React.createRef();
        this.inputAmId = uniqueId('am');
        this.inputPmId = uniqueId('pm');
        this.handleFocus = this.handleFocus.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidUpdate() {
        const { isFocused } = this.props;
        if (isFocused) this.focus();
    }

    handleFocus() {
        const { onChange, onFocus, defaultValue, value } = this.props;
        if (!value) {
            onChange(defaultValue || 'AM');
        }
        onFocus();
    }

    handleOnChange(event) {
        const { onChange } = this.props;
        const { value } = event.target;
        onChange(value);
    }

    isInputChecked(inputValue) {
        const { value, defaultValue } = this.props;
        return isChecked({ inputValue, value, defaultValue });
    }

    focus() {
        this.fieldsetRef.current.focus();
    }

    render() {
        const { isFocused } = this.props;
        const { tabIndex, onFocus, value } = this.props;

        if (isFocused) {
            return (
                <StyledSelectValue
                    as="fieldset"
                    data-id="fieldset-element"
                    role="presentation"
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    ref={this.fieldsetRef}
                    isFocused={isFocused}
                >
                    <StyledInputHidden
                        as="input"
                        type="radio"
                        id={this.inputAmId}
                        name="ampmOptions"
                        value="AM"
                        checked={this.isInputChecked('AM')}
                        onChange={this.handleOnChange}
                        onBlur={handleAmPmBlur}
                    />

                    <StyledOptionLabel htmlFor={this.inputAmId}>am</StyledOptionLabel>
                    <StyledInputHidden
                        as="input"
                        type="radio"
                        id={this.inputPmId}
                        name="ampmOptions"
                        value="PM"
                        checked={this.isInputChecked('PM')}
                        onChange={this.handleOnChange}
                        onBlur={handleAmPmBlur}
                    />

                    <StyledOptionLabel htmlFor={this.inputPmId}>pm</StyledOptionLabel>
                </StyledSelectValue>
            );
        }
        return (
            <StyledSelectValue
                aria-label="am-pm selector"
                tabIndex={tabIndex}
                onFocus={this.handleFocus}
                placeholder="--"
                defaultValue={value}
                ref={this.fieldsetRef}
            />
        );
    }
}

AmPmSelect.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    tabIndex: PropTypes.string,
    isFocused: PropTypes.bool,
};

AmPmSelect.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    onChange: () => {},
    onFocus: () => {},
    tabIndex: undefined,
    isFocused: false,
};
