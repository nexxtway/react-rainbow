import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import AmPmSelect from './ampmSelect';
import UpIcon from './icons/upArrow';
import DownIcon from './icons/downArrow';
import RenderIf from '../RenderIf';
import normalizeHour from './helpers/normalizeHour';
import normalizeMinutes from './helpers/normalizeMinutes';
import getNextHour from './helpers/getNextHour';
import getPrevHour from './helpers/getPrevHour';
import getNextMinute from './helpers/getNextMinute';
import getPrevMinute from './helpers/getPrevMinute';
import getNextAmPmValue from './helpers/getNextAmPmValue';
import get24HourTime from './helpers/get24HourTime';
import getSingleNewTypedValue from './helpers/getSingleNewTypedValue';
import isNumber from './helpers/isNumber';
import getHour from './helpers/getHour';
import getMinutes from './helpers/getMinutes';
import getAmPm from './helpers/getAmPm';
import getDefaultAmPm from './helpers/getDefaultAmPm';
import { LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, DELETE_KEY, ENTER_KEY } from '../../libs/constants';
import StyledSelectContent from './styled/selectContent';
import StyledDots from './styled/dots';
import StyledSelectValue from './styled/selectValue';
import StyledVerticalButtonsContainer from './styled/verticalButtonsContainer';
import StyledFooter from './styled/footer';
import StyledButton from './styled/button';

function preventDefault(event) {
    event.preventDefault();
}

export default class TimeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: getHour(props.value),
            minutes: getMinutes(props.value),
            ampm: getAmPm(props.value),
        };
        this.hourInputRef = React.createRef();
        this.minutesInputRef = React.createRef();
        this.amPmInputRef = React.createRef();
        this.inputsMap = {
            0: this.hourInputRef,
            1: this.minutesInputRef,
            2: this.amPmInputRef,
        };
        this.inputFocusedIndex = 0;
        this.hasPropValue = !!props.value;
        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleFocusHour = this.handleFocusHour.bind(this);
        this.handleBlurHour = this.handleBlurHour.bind(this);
        this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
        this.handleFocusMinutes = this.handleFocusMinutes.bind(this);
        this.handleAmPmChange = this.handleAmPmChange.bind(this);
        this.hanldeFocusAmPm = this.hanldeFocusAmPm.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
        this.handleButtonsFocus = this.handleButtonsFocus.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleButtonsDown = this.handleButtonsDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { value: prevValue } = prevProps;
        const { value } = this.props;
        if (prevValue !== value) {
            this.updateTime();
        }
    }

    setNextAmPmValue() {
        const { ampm } = this.state;
        const nextAmPmValue = getNextAmPmValue(ampm);
        this.setState({
            ampm: nextAmPmValue,
        });
    }

    handleChangeHour(event) {
        const { hour } = this.state;
        const { value } = event.target;
        let normalizedValue;

        if (isNumber(value)) {
            this.value = value;
            if (Number(value) > 19 || this.isUpOrDownKeyPressed || this.hasPropValue) {
                const newTypedValue = getSingleNewTypedValue(hour, value);
                normalizedValue = normalizeHour(newTypedValue);
                this.setState({
                    hour: normalizedValue,
                });
            } else {
                normalizedValue = normalizeHour(value);
                this.defaultAmPM = getDefaultAmPm(value);
                this.setState({
                    hour: normalizedValue,
                });
            }

            const shouldNotFocusNextInput =
                Number(normalizedValue) < 2 &&
                (!hour || this.isUpOrDownKeyPressed || this.hasPropValue);

            if (shouldNotFocusNextInput) {
                this.isUpOrDownKeyPressed = false;
                this.hasPropValue = false;
                return;
            }
            this.isMinutesInputFocused = true;
            this.minutesInputRef.current.focus();
        }
    }

    handleFocusHour() {
        const { hour } = this.state;
        this.inputFocusedIndex = 0;
        this.prevHour = hour || this.prevHour;
        this.setState({
            hour: '',
        });
    }

    handleBlurHour() {
        const { hour } = this.state;
        if (this.isUpOrDownButtonPressed) {
            this.isUpOrDownButtonPressed = false;
            return;
        }
        if (this.isMinutesInputFocused) {
            this.isMinutesInputFocused = false;
            return;
        }
        if (hour === '00' && this.value >= '0') {
            this.setState({
                hour: '12',
            });
        }
    }

    handleChangeMinutes(event) {
        const { minutes } = this.state;
        const { value } = event.target;
        let normalizedValue;

        if (isNumber(value)) {
            if (Number(value) > 60 || this.isUpOrDownKeyPressed) {
                const newTypedValue = getSingleNewTypedValue(minutes, value);
                normalizedValue = normalizeMinutes(newTypedValue);
                this.setState({
                    minutes: normalizedValue,
                });
            } else {
                normalizedValue = normalizeMinutes(value);
                this.setState({
                    minutes: normalizedValue,
                });
            }

            const shouldNotFocusNextInput =
                Number(normalizedValue) < 6 && (!minutes || this.isUpOrDownKeyPressed);

            if (shouldNotFocusNextInput) {
                this.isUpOrDownKeyPressed = false;
                return;
            }
            this.amPmInputRef.current.focus();
        }
    }

    handleFocusMinutes() {
        const { minutes } = this.state;
        this.inputFocusedIndex = 1;
        this.prevMinutes = minutes || this.prevMinutes;
        this.setState({
            minutes: '',
        });
    }

    handleAmPmChange(value) {
        this.setState({
            ampm: value,
        });
    }

    hanldeFocusAmPm() {
        this.inputFocusedIndex = 2;
    }

    handleKeyDown(event) {
        const { keyCode } = event;

        if (keyCode === RIGHT_KEY) {
            this.handleRightKeyPressed();
        }
        if (keyCode === LEFT_KEY) {
            this.handleLeftKeyPressed();
        }
        if (keyCode === UP_KEY) {
            this.incrementHandler();
        }
        if (keyCode === DOWN_KEY) {
            this.decrementHandler();
        }
        if (keyCode === DELETE_KEY) {
            this.resetState();
        }
        if (keyCode === ENTER_KEY) {
            this.handleChangeTime(event);
        }
    }

    handleRightKeyPressed() {
        const nextInputIndex = this.inputFocusedIndex + 1;
        const nextInputToFocus = this.inputsMap[nextInputIndex];
        if (nextInputToFocus) {
            this.inputFocusedIndex += 1;
            nextInputToFocus.current.focus();
        }
    }

    handleLeftKeyPressed() {
        const prevInputIndex = this.inputFocusedIndex - 1;
        const prevInputToFocus = this.inputsMap[prevInputIndex];
        if (prevInputToFocus) {
            this.inputFocusedIndex -= 1;
            prevInputToFocus.current.focus();
        }
    }

    incrementHandler() {
        this.isUpOrDownKeyPressed = true;
        if (this.inputFocusedIndex === 0) {
            this.incrementHour();
        }
        if (this.inputFocusedIndex === 1) {
            this.incrementMinutes();
        }
        if (this.inputFocusedIndex === 2) {
            this.setNextAmPmValue();
        }
    }

    decrementHandler() {
        this.isUpOrDownKeyPressed = true;
        if (this.inputFocusedIndex === 0) {
            this.decrementHour();
        }
        if (this.inputFocusedIndex === 1) {
            this.decrementMinutes();
        }
        if (this.inputFocusedIndex === 2) {
            this.setNextAmPmValue();
        }
    }

    handleButtonsDown() {
        this.isUpOrDownButtonPressed = true;
    }

    handleButtonsFocus() {
        const currentInputFocused = this.inputsMap[this.inputFocusedIndex];
        if (currentInputFocused) {
            currentInputFocused.current.focus();
        }
    }

    resetState() {
        if (this.inputFocusedIndex === 0) {
            this.setState({
                hour: '',
            });
            this.prevHour = '';
        }
        if (this.inputFocusedIndex === 1) {
            this.setState({
                minutes: '',
            });
            this.prevMinutes = '';
        }
    }

    updateTime() {
        const { value } = this.props;
        this.setState({
            hour: getHour(value),
            minutes: getMinutes(value),
            ampm: getAmPm(value),
        });
    }

    focusHourInput() {
        this.hourInputRef.current.focus();
        this.inputFocusedIndex = 0;
    }

    incrementHour() {
        const { hour } = this.state;
        const hourValue = hour || this.prevHour;
        this.setState({
            hour: normalizeHour(getNextHour(hourValue)),
        });
    }

    decrementHour() {
        const { hour } = this.state;
        const hourValue = hour || this.prevHour;
        this.setState({
            hour: normalizeHour(getPrevHour(hourValue)),
        });
    }

    incrementMinutes() {
        const { minutes } = this.state;
        const minutesValue = minutes || this.prevMinutes;
        this.setState({
            minutes: normalizeMinutes(getNextMinute(minutesValue)),
        });
    }

    decrementMinutes() {
        const { minutes } = this.state;
        const minutesValue = minutes || this.prevMinutes;
        this.setState({
            minutes: normalizeMinutes(getPrevMinute(minutesValue)),
        });
    }

    handleChangeTime(event) {
        event.preventDefault();
        event.stopPropagation();
        const { hour, minutes, ampm } = this.state;
        const { onChange, onCloseModal } = this.props;
        const currentHour = hour || this.prevHour;
        const currentMinutes = minutes || this.prevMinutes;
        const time = get24HourTime({
            hour: currentHour,
            minutes: currentMinutes,
            ampm,
        });

        if (currentHour && currentMinutes && ampm) {
            onChange(time);
        }
        onCloseModal();
    }

    render() {
        const { hour, minutes, ampm } = this.state;
        const { onCloseModal, cancelLabel, okLabel, hours24, className, variant } = this.props;
        const hourPlaceholder = this.prevHour || '--';
        const minutesPlaceholder = this.prevMinutes || '--';

        return (
            <article className={className}>
                <StyledSelectContent role="presentation" onKeyDown={this.handleKeyDown}>
                    <StyledSelectValue
                        aria-label="hour"
                        onDrop={preventDefault}
                        onPaste={preventDefault}
                        data-id="hour"
                        type="text"
                        value={hour}
                        placeholder={hourPlaceholder}
                        onChange={this.handleChangeHour}
                        onFocus={this.handleFocusHour}
                        onBlur={this.handleBlurHour}
                        inputMode="numeric"
                        pattern="\d*"
                        ref={this.hourInputRef}
                        variant={variant}
                    />

                    <StyledDots>:</StyledDots>

                    <StyledSelectValue
                        aria-label="minutes"
                        onDrop={preventDefault}
                        onPaste={preventDefault}
                        data-id="minutes"
                        tabIndex="-1"
                        type="text"
                        value={minutes}
                        placeholder={minutesPlaceholder}
                        onChange={this.handleChangeMinutes}
                        onFocus={this.handleFocusMinutes}
                        inputMode="numeric"
                        pattern="\d*"
                        ref={this.minutesInputRef}
                        variant={variant}
                    />

                    <RenderIf isTrue={!hours24}>
                        <AmPmSelect
                            tabIndex="-1"
                            value={ampm}
                            defaultValue={this.defaultAmPM}
                            onFocus={this.hanldeFocusAmPm}
                            onChange={this.handleAmPmChange}
                            ref={this.amPmInputRef}
                            variant={variant}
                        />
                    </RenderIf>

                    <StyledVerticalButtonsContainer>
                        <ButtonIcon
                            id="time-picker_up-button"
                            tabIndex="-1"
                            variant="border-filled"
                            icon={<UpIcon />}
                            size="small"
                            onMouseDown={this.handleButtonsDown}
                            onClick={this.incrementHandler}
                            onFocus={this.handleButtonsFocus}
                            assistiveText="Next value"
                        />

                        <ButtonIcon
                            id="time-picker_down-button"
                            tabIndex="-1"
                            variant="border-filled"
                            icon={<DownIcon />}
                            size="small"
                            onMouseDown={this.handleButtonsDown}
                            onClick={this.decrementHandler}
                            onFocus={this.handleButtonsFocus}
                            assistiveText="Previous value"
                        />
                    </StyledVerticalButtonsContainer>
                </StyledSelectContent>

                <StyledFooter>
                    <StyledButton
                        id="time-picker_cancel-button"
                        variant="base"
                        label={cancelLabel}
                        onClick={onCloseModal}
                    />

                    <StyledButton
                        id="time-picker_ok-button"
                        variant="brand"
                        label={okLabel}
                        onClick={this.handleChangeTime}
                    />
                </StyledFooter>
            </article>
        );
    }
}

TimeSelect.propTypes = {
    onCloseModal: PropTypes.func,
    hours24: PropTypes.bool,
    cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'brand']),
};

TimeSelect.defaultProps = {
    onCloseModal: () => {},
    hours24: false,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    onChange: () => {},
    value: undefined,
    className: undefined,
    variant: 'default',
};
