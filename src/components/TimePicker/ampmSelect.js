import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getNextAmPmValue from './helpers/getNextAmPmValue';
import { uniqueId } from './../../libs/utils';
import {
    UP_KEY,
    DOWN_KEY,
} from '../../libs/constants';

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
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleAmClick = this.handleAmClick.bind(this);
        this.handlePmClick = this.handlePmClick.bind(this);
    }

    handleFocus() {
        this.setState({
            isFocused: true,
        });
        setTimeout(() => this.fieldsetRef.current.focus(), 0);
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

    handleAmClick() {
        const { value } = this.state;
        const { onChange } = this.props;
        if (!value) {
            onChange('AM');
        }
    }

    handlePmClick() {
        const { value } = this.state;
        const { onChange } = this.props;
        if (!value) {
            onChange('PM');
        }
    }

    handleKeyDown(event) {
        const { keyCode } = event;
        const { onChange } = this.props;
        const { value } = this.state;
        const nextValue = getNextAmPmValue(value);
        if (keyCode === UP_KEY || keyCode === DOWN_KEY) {
            onChange(nextValue);
        }
    }

    isChecked(inputValue) {
        const { value, defaultValue } = this.props;
        if (value) {
            return inputValue === value;
        }
        if (defaultValue) {
            return inputValue === defaultValue;
        }
        return inputValue === 'AM';
    }

    focus() {
        this.fieldsetRef.current.focus();
    }

    render() {
        const { isFocused } = this.state;
        const { tabIndex, onFocus, value } = this.props;

        if (isFocused) {
            return (
                <fieldset
                    className="rainbow-time-picker_time-select-value rainbow-time-picker_select-ampm"
                    role="presentation"
                    tabIndex={tabIndex}
                    onBlur={this.handleBlur}
                    onFocus={onFocus}
                    onKeyDown={this.handleKeyDown}
                    ref={this.fieldsetRef}>

                    <input
                        className="rainbow-time-picker_time-input--hidden"
                        type="radio"
                        id={this.inputAmId}
                        name="ampmOptions"
                        value="AM"
                        checked={this.isChecked('AM')}
                        onChange={this.handleOnChange}
                        onClick={this.handleAmClick}
                        onBlur={handleAmPmBlur} />

                    <label className="rainbow-time-picker_select-option" htmlFor={this.inputAmId}>
                        am
                    </label>
                    <input
                        className="rainbow-time-picker_time-input--hidden"
                        type="radio"
                        id={this.inputPmId}
                        name="ampmOptions"
                        value="PM"
                        checked={this.isChecked('PM')}
                        onChange={this.handleOnChange}
                        onClick={this.handlePmClick}
                        onBlur={handleAmPmBlur} />

                    <label className="rainbow-time-picker_select-option" htmlFor={this.inputPmId}>
                        pm
                    </label>
                </fieldset>
            );
        }
        return (
            <input
                className="rainbow-time-picker_time-select-value"
                tabIndex={tabIndex}
                onFocus={this.handleFocus}
                placeholder="--"
                defaultValue={value}
                ref={this.fieldsetRef} />
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
