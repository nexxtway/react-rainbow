import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import Button from '../Button';
import AmPmSelect from './ampmSelect';
import UpIcon from './icons/upArrow';
import DownIcon from './icons/downArrow';
import RenderIf from '../RenderIf';

export default class TimeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: undefined,
            minutes: undefined,
            ampm: undefined,
        };
        this.hourInputRef = React.createRef();
        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
        this.handleChangeAmPm = this.handleChangeAmPm.bind(this);
    }

    componentDidMount() {
        if (this.hourInputRef) {
            this.hourInputRef.current.focus();
        }
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
        const { onCloseModal, cancelLabel, okLabel, hours24 } = this.props;
        return (
            <article>
                <div className="rainbow-time-picker_time-select-content">
                    <input
                        className="rainbow-time-picker_time-select-value"
                        type="number"
                        value={hour}
                        min="1"
                        max="12"
                        placeholder="--"
                        onChange={this.handleChangeHour}
                        ref={this.hourInputRef} />
                    <span className="rainbow-time-picker_dots">:</span>
                    <input
                        className="rainbow-time-picker_time-select-value"
                        type="number"
                        value={minutes}
                        min="0"
                        max="60"
                        placeholder="--"
                        onChange={this.handleChangeMinutes} />

                    <RenderIf isTrue={!hours24}>
                        <AmPmSelect
                            value={ampm}
                            onChange={this.handleChangeAmPm} />
                    </RenderIf>

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
                        label={cancelLabel}
                        onClick={onCloseModal} />

                    <Button
                        className="rainbow-time-picker_button"
                        variant="brand"
                        label={okLabel}
                        onClick={() => {}} />
                </footer>
            </article>
        );
    }
}

TimeSelect.propTypes = {
    onCloseModal: PropTypes.func,
    hours24: PropTypes.bool,
    cancelLabel: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    okLabel: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

TimeSelect.defaultProps = {
    onCloseModal: () => {},
    hours24: false,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
};
