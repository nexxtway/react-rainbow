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
            hour: '--',
            minutes: '--',
            ampm: '--',
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
        const { onCloseModal } = this.props;
        return (
            <article>
                <div className="rainbow-time-picker_time-content">
                    <span className="rainbow-time-picker_time">
                        <input
                            className="rainbow-time-picker_time-input"
                            value={hour}
                            onChange={this.handleChangeHour}
                            placeholder="--" />
                    </span>
                    <span className="rainbow-time-picker_time-dots">:</span>
                    <span className="rainbow-time-picker_time">
                        <input
                            className="rainbow-time-picker_time-input"
                            value={minutes}
                            onChange={this.handleChangeMinutes}
                            placeholder="--" />
                    </span>
                    <span className="rainbow-time-picker_time">
                        <input
                            className="rainbow-time-picker_time-input"
                            value={ampm}
                            onChange={this.handleChangeAmPm}
                            placeholder="--" />
                    </span>
                    <div className="rainbow-time-picker_icon-button-container">
                        <ButtonIcon
                            variant="border-filled"
                            icon={<UpIcon />}
                            size="x-small" />
                        <ButtonIcon
                            variant="border-filled"
                            icon={<DownIcon />}
                            size="x-small" />
                    </div>
                </div>
                <div className="rainbow-time-picker_footer">
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
                </div>
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
