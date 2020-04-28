import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import AmPmSelect from './ampmSelect';
import RenderIf from '../RenderIf';
import {
    normalizeHour,
    normalizeMinutes,
    getNextHour,
    getPrevHour,
    getNextMinute,
    getPrevMinute,
    getNextAmPmValue,
    get12HourTime,
    get24HourTime,
    getSingleNewTypedValue,
    isNumber,
    getHour,
    getMinutes,
    getAmPm,
    getDefaultAmPm,
} from './helpers';
import { LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, DELETE_KEY } from '../../libs/constants';
import {
    StyledSelectContent,
    StyledDots,
    StyledSelectValue,
    StyledVerticalButtonsContainer,
    StyledUpArrow,
    StyledDownArrow,
} from './styled';
import OutsideClick from '../../libs/outsideClick';

function preventDefault(event) {
    event.preventDefault();
}

/**
 * A TimeSelectInput is used to input a time by displaying an interface the user can interact with.
 * @category Form
 */

export default class TimeSelectInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: getHour(props.value),
            minutes: getMinutes(props.value),
            ampm: getAmPm(props.value),
            inputFocusedIndex: 0,
        };
        this.containerRef = React.createRef();
        this.hourInputRef = React.createRef();
        this.minutesInputRef = React.createRef();
        this.amPmInputRef = React.createRef();
        this.inputsMap = {
            0: this.hourInputRef,
            1: this.minutesInputRef,
            2: this.amPmInputRef,
        };
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
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.outsideClick = new OutsideClick();
    }

    componentDidMount() {
        this.outsideClick.startListening(this.containerRef.current, this.handleClickOutside);
    }

    componentDidUpdate(prevProps) {
        const { value: prevValue } = prevProps;
        const { value } = this.props;
        if (prevValue !== value) {
            this.updateTime();
        }
    }

    componentWillUnmount() {
        this.outsideClick.stopListening();
    }

    setNextAmPmValue() {
        const { ampm } = this.state;
        const nextAmPmValue = getNextAmPmValue(ampm);
        this.handleChangeTime({
            ampm: nextAmPmValue,
        });
    }

    handleClickOutside() {
        const { inputFocusedIndex } = this.state;
        if (inputFocusedIndex === -1) return;
        this.setState({ inputFocusedIndex: -1 });
    }

    handleChangeHour(event) {
        const { hour } = this.state;
        const { hour24 } = this.props;
        const { value } = event.target;
        let normalizedValue;

        if (isNumber(value)) {
            this.value = value;
            if (Number(value) > 23 || this.isUpOrDownKeyPressed || this.hasPropValue) {
                const newTypedValue = getSingleNewTypedValue(hour, value);
                normalizedValue = normalizeHour(newTypedValue, hour24);
                this.handleChangeTime({
                    hour: normalizedValue,
                });
            } else {
                normalizedValue = normalizeHour(value, hour24);
                this.defaultAmPM = getDefaultAmPm(value);
                this.handleChangeTime({
                    hour: normalizedValue,
                });
            }

            const shouldNotFocusNextInput = !hour24
                ? Number(normalizedValue) < 2 &&
                  (!hour || this.isUpOrDownKeyPressed || this.hasPropValue)
                : Number(normalizedValue) < 3 &&
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
        this.prevHour = hour || this.prevHour;
        this.setState({
            inputFocusedIndex: 0,
            hour: '',
        });
    }

    handleBlurHour() {
        const { hour } = this.state;
        const { hour24 } = this.props;
        if (this.isUpOrDownButtonPressed) {
            this.isUpOrDownButtonPressed = false;
            return;
        }
        if (this.isMinutesInputFocused) {
            this.isMinutesInputFocused = false;
            return;
        }
        if (hour === '00' && this.value >= '0' && !hour24) {
            this.setState({
                hour: '12',
            });
        }
    }

    handleChangeMinutes(event) {
        const { minutes } = this.state;
        const { value } = event.target;
        const { hour24 } = this.props;
        let normalizedValue;

        if (isNumber(value)) {
            if (Number(value) > 60 || this.isUpOrDownKeyPressed) {
                const newTypedValue = getSingleNewTypedValue(minutes, value);
                normalizedValue = normalizeMinutes(newTypedValue);
                this.handleChangeTime({
                    minutes: normalizedValue,
                });
            } else {
                normalizedValue = normalizeMinutes(value);
                this.handleChangeTime({
                    minutes: normalizedValue,
                });
            }

            const shouldNotFocusNextInput =
                Number(normalizedValue) < 6 && (!minutes || this.isUpOrDownKeyPressed);

            if (shouldNotFocusNextInput) {
                this.isUpOrDownKeyPressed = false;
                return;
            }
            if (!hour24) this.amPmInputRef.current.focus();
        }
    }

    handleFocusMinutes() {
        const { minutes } = this.state;
        this.prevMinutes = minutes || this.prevMinutes;
        this.setState({
            inputFocusedIndex: 1,
            minutes: '',
        });
    }

    handleAmPmChange(value) {
        this.handleChangeTime({
            inputFocusedIndex: -1,
            ampm: value,
        });
    }

    hanldeFocusAmPm() {
        this.setState({ inputFocusedIndex: 2 });
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
    }

    handleRightKeyPressed() {
        const { inputFocusedIndex } = this.state;
        const nextInputIndex = inputFocusedIndex + 1;
        const nextInputToFocus = this.inputsMap[nextInputIndex];
        if (nextInputToFocus && nextInputToFocus.current != null) {
            this.setState({ inputFocusedIndex: inputFocusedIndex + 1 });
            nextInputToFocus.current.focus();
        }
    }

    handleLeftKeyPressed() {
        const { inputFocusedIndex } = this.state;
        const prevInputIndex = inputFocusedIndex - 1;
        const prevInputToFocus = this.inputsMap[prevInputIndex];
        if (prevInputToFocus) {
            this.setState({ inputFocusedIndex: inputFocusedIndex - 1 });
            prevInputToFocus.current.focus();
        }
    }

    incrementHandler() {
        const { inputFocusedIndex } = this.state;
        this.isUpOrDownKeyPressed = true;
        if (inputFocusedIndex === 0) {
            this.incrementHour();
        }
        if (inputFocusedIndex === 1) {
            this.incrementMinutes();
        }
        if (inputFocusedIndex === 2) {
            event.preventDefault();
            this.setNextAmPmValue();
        }
    }

    decrementHandler() {
        const { inputFocusedIndex } = this.state;
        this.isUpOrDownKeyPressed = true;
        if (inputFocusedIndex === 0) {
            this.decrementHour();
        }
        if (inputFocusedIndex === 1) {
            this.decrementMinutes();
        }
        if (inputFocusedIndex === 2) {
            event.preventDefault();
            this.setNextAmPmValue();
        }
    }

    handleButtonsDown() {
        this.isUpOrDownButtonPressed = true;
    }

    handleButtonsFocus() {
        const { inputFocusedIndex } = this.state;
        const currentInputFocused = this.inputsMap[inputFocusedIndex];
        if (currentInputFocused) {
            currentInputFocused.current.focus();
        }
    }

    resetState() {
        const { inputFocusedIndex } = this.state;
        if (inputFocusedIndex === 0) {
            this.handleChangeTime()({
                hour: '',
            });
            this.prevHour = '';
        }
        if (inputFocusedIndex === 1) {
            this.handleChangeTime({
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
        this.setState({ inputFocusedIndex: 0 });
    }

    incrementHour() {
        const { hour } = this.state;
        const { hour24 } = this.props;
        const hourValue = hour || this.prevHour;
        this.handleChangeTime({
            hour: normalizeHour(getNextHour(hourValue, hour24), hour24),
        });
    }

    decrementHour() {
        const { hour } = this.state;
        const { hour24 } = this.props;
        const hourValue = hour || this.prevHour;
        this.handleChangeTime({
            hour: normalizeHour(getPrevHour(hourValue, hour24), hour24),
        });
    }

    incrementMinutes() {
        const { minutes } = this.state;
        const minutesValue = minutes || this.prevMinutes;
        this.handleChangeTime({
            minutes: normalizeMinutes(getNextMinute(minutesValue)),
        });
    }

    decrementMinutes() {
        const { minutes } = this.state;
        const minutesValue = minutes || this.prevMinutes;
        this.handleChangeTime({
            minutes: normalizeMinutes(getPrevMinute(minutesValue)),
        });
    }

    handleChangeTime(newState) {
        const { hour, minutes, ampm } = this.state;
        const { onChange, hour24 } = this.props;
        const currentHour = newState.hour || hour || this.prevHour;
        const currentMinutes = newState.minutes || minutes || this.prevMinutes;
        const currentAmPm = newState.ampm || ampm;
        const time24 = get24HourTime({
            hour: currentHour,
            minutes: currentMinutes,
            ampm: currentAmPm,
        });
        const time = hour24 ? time24 : get12HourTime(time24);
        this.setState(newState);

        if (
            (currentHour && currentMinutes && ampm && !hour24) ||
            (currentHour && currentMinutes && hour24)
        ) {
            onChange(time);
        }
    }

    render() {
        const { hour, minutes, ampm, inputFocusedIndex } = this.state;
        const { hour24, className, style, id } = this.props;
        const hourPlaceholder = this.prevHour || '--';
        const minutesPlaceholder = this.prevMinutes || '--';

        return (
            <article className={className} style={style} id={id}>
                <StyledSelectContent
                    ref={this.containerRef}
                    role="presentation"
                    onKeyDown={this.handleKeyDown}
                >
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
                        isFocused={inputFocusedIndex === 0}
                        pattern="\d*"
                        ref={this.hourInputRef}
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
                        isFocused={inputFocusedIndex === 1}
                        inputMode="numeric"
                        pattern="\d*"
                        ref={this.minutesInputRef}
                    />

                    <RenderIf isTrue={!hour24}>
                        <AmPmSelect
                            tabIndex="-1"
                            value={ampm}
                            defaultValue={this.defaultAmPM}
                            onFocus={this.hanldeFocusAmPm}
                            onChange={this.handleAmPmChange}
                            isFocused={inputFocusedIndex === 2}
                            ref={this.amPmInputRef}
                        />
                    </RenderIf>

                    <StyledVerticalButtonsContainer>
                        <ButtonIcon
                            id="time-picker_up-button"
                            tabIndex="-1"
                            variant="border-filled"
                            icon={<StyledUpArrow />}
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
                            icon={<StyledDownArrow />}
                            size="small"
                            onMouseDown={this.handleButtonsDown}
                            onClick={this.decrementHandler}
                            onFocus={this.handleButtonsFocus}
                            assistiveText="Previous value"
                        />
                    </StyledVerticalButtonsContainer>
                </StyledSelectContent>
            </article>
        );
    }
}

TimeSelectInput.propTypes = {
    /** Sets the date for the TimeSelectInput programmatically. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Specifies that the TimeSelectInput will be in a 24hr format. This value defaults to false. */
    hour24: PropTypes.bool,
};

TimeSelectInput.defaultProps = {
    value: undefined,
    onChange: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    hour24: false,
};
