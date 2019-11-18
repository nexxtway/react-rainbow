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
        this.state = {
            isFocused: false,
        };
        this.fieldsetRef = React.createRef();
        this.inputAmId = uniqueId('am');
        this.inputPmId = uniqueId('pm');
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleFocus() {
        const { onChange, defaultValue, value } = this.props;
        this.setState({
            isFocused: true,
        });
        setTimeout(() => this.fieldsetRef.current.focus(), 0);
        if (!value) {
            onChange(defaultValue || 'AM');
        }
    }

    handleBlur() {
        this.setState({
            isFocused: false,
        });
    }

    handleOnChange(event) {
        const { onChange } = this.props;
        const { value } = event.target;
        onChange(value);
    }

    handleClick() {
        this.setState({ isFocused: false });
    }

    isInputChecked(inputValue) {
        const { value, defaultValue } = this.props;
        return isChecked({ inputValue, value, defaultValue });
    }

    focus() {
        this.fieldsetRef.current.focus();
    }

    render() {
        const { isFocused } = this.state;
        const { tabIndex, onFocus, value } = this.props;

        if (isFocused) {
            return (
                <StyledSelectValue
                    as="fieldset"
                    data-id="fieldset-element"
                    role="presentation"
                    tabIndex={tabIndex}
                    onBlur={this.handleBlur}
                    onFocus={onFocus}
                    ref={this.fieldsetRef}
                >
                    <StyledInputHidden
                        as="input"
                        type="radio"
                        id={this.inputAmId}
                        name="ampmOptions"
                        value="AM"
                        checked={this.isInputChecked('AM')}
                        onChange={this.handleOnChange}
                        onClick={this.handleClick}
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
                        onClick={this.handleClick}
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
};

AmPmSelect.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    onChange: () => {},
    onFocus: () => {},
    tabIndex: undefined,
};
