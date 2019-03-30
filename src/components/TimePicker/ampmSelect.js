import React, { Component } from 'react';

export default class AmPmSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
        };
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus() {
        this.setState({
            isFocused: true,
        });
    }

    handleBlur() {
        this.setState({
            isFocused: false,
        });
    }

    render() {
        const { isFocused } = this.state;
        if (isFocused) {
            return (
                <fieldset className="rainbow-time-picker_select-ampm" onBlur={this.handleBlur}>
                    <input
                        className="rainbow-time-picker_time-input--hidden"
                        type="radio"
                        id="am"
                        name="options"
                        value="am" />
                    <label className="rainbow-time-picker_select-option" htmlFor="am"> am </label>
                    <input
                        className="rainbow-time-picker_time-input--hidden"
                        type="radio"
                        id="pm"
                        name="options"
                        value="pm" />
                    <label className="rainbow-time-picker_select-option" htmlFor="pm"> pm </label>
                </fieldset>
            );
        }
        return (
            <input
                onFocus={this.handleFocus}
                className="rainbow-time-picker_time-select-value"
                placeholder="--"
                onChange={this.handleChangeAmPm} />
        );
    }
}
