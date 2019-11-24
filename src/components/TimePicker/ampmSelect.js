import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from './../../libs/utils';
import isChecked from './helpers/isChecked';
import StyledInputHidden from './styled/inputHidden';
import StyledOptionLabel from './styled/optionLabel';
import StyledSelectValue from './styled/selectValue';
import { TAB_KEY } from '../../libs/constants';

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
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidUpdate(prevState) {
        const { isFocused: prevIsFocused } = prevState;
        const { isFocused } = this.state;

        if (!prevIsFocused && isFocused) {
            document.addEventListener('click', this.handleClickOutside);
            document.addEventListener('keydown', this.handleKeyPress);
        } else if (prevIsFocused && !isFocused) {
            document.removeEventListener('click', this.handleClickOutside);
            document.removeEventListener('keydown', this.handleKeyPress);
        }
    }

    handleClickOutside(event) {
        if (!this.fieldsetRef.current) return;
        if (!this.fieldsetRef.current.contains(event.target)) {
            this.setState({ isFocused: false });
        }
    }

    handleKeyPress(event) {
        if (event.keyCode === TAB_KEY) {
            this.setState({ isFocused: false });
        }
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
