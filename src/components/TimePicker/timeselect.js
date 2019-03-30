import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import Button from '../Button';
import UpIcon from './icons/upArrow';
import DownIcon from './icons/downArrow';

export default class TimeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: undefined,
            minutes: undefined,
            ampm: undefined,
        };
        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
        this.handleChangeAmPm = this.handleChangeAmPm.bind(this);
    }

    handleChangeHour(event) {
        this.setState({
            hour: event.target.value,
        });
    }

    handleChangeMinutes(event) {
        this.setState({
            minutes: event.target.value,
        });
    }

    handleChangeAmPm(event) {
        this.setState({
            ampm: event.target.value,
        });
    }

    render() {
        const { hour, minutes, ampm } = this.state;
        const { onCloseModal, value } = this.props;
        return (
            <article>
                <div className="rainbow-time-picker_time-content">
                    <input
                        className="rainbow-time-picker_time-input--hidden"
                        type="time"
                        value={value} />
                    <span className="rainbow-time-picker_time-input-container">
                        <input
                            className="rainbow-time-picker_time-input"
                            type="number"
                            value={hour}
                            min="1"
                            max="12"
                            placeholder="--"
                            onChange={this.handleChangeHour} />
                    </span>
                    <span className="rainbow-time-picker_time-dots">:</span>
                    <span className="rainbow-time-picker_time-input-container">
                        <input
                            className="rainbow-time-picker_time-input"
                            type="number"
                            value={minutes}
                            min="0"
                            max="60"
                            placeholder="--"
                            onChange={this.handleChangeMinutes} />
                    </span>
                    <span className="rainbow-time-picker_time-input-container">
                        <input
                            className="rainbow-time-picker_time-input"
                            value={ampm}
                            placeholder="--"
                            onChange={this.handleChangeAmPm} />
                    </span>
                    <div className="rainbow-time-picker_icon-button-container">
                        <ButtonIcon
                            variant="border-filled"
                            icon={<UpIcon />}
                            size="small" />
                        <ButtonIcon
                            variant="border-filled"
                            icon={<DownIcon />}
                            size="small" />
                    </div>
                </div>
                <footer className="rainbow-time-picker_footer">
                    <Button
                        className="rainbow-time-picker_button"
                        variant="base"
                        label="Cancel"
                        onClick={onCloseModal} />

                    <Button
                        className="rainbow-time-picker_button"
                        variant="brand"
                        label="OK"
                        onClick={() => {}} />
                </footer>
            </article>
        );
    }
}

TimeSelect.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    onCloseModal: PropTypes.func,
};

TimeSelect.defaultProps = {
    value: undefined,
    onChange: () => {},
    onCloseModal: () => {},
};
