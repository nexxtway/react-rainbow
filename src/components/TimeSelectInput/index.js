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
    get24HourTime,
    getSingleNewTypedValue,
    normalizeValue,
} from './helpers';
import { LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, DELETE_KEY } from '../../libs/constants';
import {
    StyledContainer,
    StyledSelectContent,
    StyledDots,
    StyledSelectValue,
    StyledVerticalButtonsContainer,
    StyledUpArrow,
    StyledDownArrow,
    StyledLabel,
    StyledHelpText,
    StyledErrorText,
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
        const { hour, minutes, ampm } = normalizeValue(props.value, props.hour24);
        this.state = { hour, minutes, ampm, inputFocusedIndex: -1 };
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
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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

        if (prevValue !== value && value) {
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
        this.handleBlur();
        if (inputFocusedIndex === -1) return;
        this.setState({ inputFocusedIndex: -1 });
    }

    handleChangeHour(event) {
        const { hour24 } = this.props;
        const { value } = event.target;
        const { hour } = this.state;

        const conditionalHour = hour24 ? 23 : 12;
        const conditionalDigit = hour24 ? 3 : 2;
        const newTypedValue = getSingleNewTypedValue(hour, value);
        const strValue = `${hour}${newTypedValue}`;
        const newTransformedValue = +strValue;
        const invalidHour = newTransformedValue > conditionalHour;
        const invalidDigit = +newTypedValue > conditionalDigit && invalidHour;
        const invalidValue = invalidHour || invalidDigit;

        const normalizedValue = invalidValue
            ? normalizeHour(newTypedValue, hour24)
            : normalizeHour(newTransformedValue, hour24);

        this.handleChangeTime({
            hour: normalizedValue,
        });

        const shouldFocusNextInput = +newTypedValue >= conditionalDigit || +normalizedValue > 9;
        if (shouldFocusNextInput) {
            this.isMinutesInputFocused = true;
            this.minutesInputRef.current.focus();
        }
    }

    handleFocusHour() {
        const { hour } = this.state;
        this.prevHour = hour || this.prevHour;
        this.setState({
            inputFocusedIndex: 0,
        });
    }

    handleBlurHour() {
        if (this.isUpOrDownButtonPressed) {
            this.isUpOrDownButtonPressed = false;
            return;
        }
        if (this.isMinutesInputFocused) {
            this.isMinutesInputFocused = false;
        }
    }

    handleChangeMinutes(event) {
        const { minutes } = this.state;
        const { value } = event.target;
        const { hour24 } = this.props;

        const conditionalMinutes = 59;
        const conditionalDigit = 5;
        const newTypedValue = getSingleNewTypedValue(minutes, value);
        const strValue = `${minutes}${newTypedValue}`;
        const newTransformedValue = +strValue;
        const invalidMinute = newTransformedValue > conditionalMinutes;
        const invalidDigit = +newTypedValue > conditionalDigit && invalidMinute;
        const invalidValue = invalidMinute || invalidDigit;

        const normalizedValue = invalidValue
            ? normalizeHour(newTypedValue, hour24)
            : normalizeHour(newTransformedValue, hour24);

        this.handleChangeTime({
            minutes: normalizedValue,
        });

        const shouldFocusNextInput =
            !hour24 && (+newTypedValue > conditionalDigit || +normalizedValue > 9);
        if (shouldFocusNextInput) {
            this.amPmInputRef.current.focus();
        }
    }

    handleFocusMinutes() {
        const { minutes } = this.state;
        this.prevMinutes = minutes || this.prevMinutes;
        this.setState({
            inputFocusedIndex: 1,
        });
    }

    handleAmPmChange(value) {
        this.handleChangeTime({
            inputFocusedIndex: -1,
            ampm: value,
        });
    }

    hanldeFocusAmPm() {
        const { disabled, readOnly } = this.props;

        if (!disabled && !readOnly) {
            this.setState({ inputFocusedIndex: 2 });
        }
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

    handleBlur() {
        const { onBlur, value } = this.props;

        onBlur(value);
    }

    handleClick(event) {
        const { onClick, disabled, readOnly } = this.props;

        if (!disabled && !readOnly) {
            onClick(event);
        }
    }

    handleRightKeyPressed() {
        const { inputFocusedIndex } = this.state;
        const nextInputIndex = inputFocusedIndex + 1;
        const nextInputToFocus = this.inputsMap[nextInputIndex];
        if (nextInputToFocus && nextInputToFocus.current != null) {
            this.setState({
                inputFocusedIndex: inputFocusedIndex + 1,
            });
            nextInputToFocus.current.focus();
        }
    }

    handleLeftKeyPressed() {
        const { inputFocusedIndex } = this.state;
        const prevInputIndex = inputFocusedIndex - 1;
        const prevInputToFocus = this.inputsMap[prevInputIndex];
        if (prevInputToFocus) {
            this.setState({
                inputFocusedIndex: inputFocusedIndex - 1,
            });
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
            this.handleChangeTime({
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
        const { value, hour24 } = this.props;

        const { hour, minutes, ampm } = normalizeValue(value, hour24);

        this.setState({
            hour,
            minutes,
            ampm,
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
        const currentHour = (() => {
            if (newState && typeof newState.hour === 'string') return newState.hour;
            if (typeof hour === 'string') return hour;
            return this.prevHour;
        })();
        const currentMinutes = (() => {
            if (newState && typeof newState.minutes === 'string') return newState.minutes;
            if (typeof minutes === 'string') return minutes;
            return this.prevMinutes;
        })();
        const currentAmPm = (() => {
            if (newState && typeof newState.ampm === 'string') return newState.ampm;
            if (typeof ampm === 'string') return ampm;
            return '';
        })();

        this.setState(newState);

        if (
            (currentHour && currentMinutes && ampm && !hour24) ||
            (currentHour && currentMinutes && hour24)
        ) {
            const time24 = get24HourTime({
                hour: currentHour,
                minutes: currentMinutes,
                ampm: currentAmPm,
            });
            this.prevValue = time24;
            onChange(time24);
        } else if (this.prevValue) {
            this.prevValue = '';
            onChange('');
        }
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.containerRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.containerRef.current.click();
    }

    render() {
        const {
            hour: stateHour,
            minutes: stateMinutes,
            ampm: stateAmPm,
            inputFocusedIndex,
        } = this.state;
        let hour = stateHour || this.prevHour || '';
        let minutes = stateMinutes || this.prevMinutes || '';
        let ampm = stateAmPm || '';
        const {
            hour24,
            className,
            style,
            id,
            value,
            label,
            hideLabel,
            required,
            bottomHelpText,
            error,
            disabled,
            readOnly,
            tabIndex,
            onFocus,
        } = this.props;
        if (value) {
            const { hour: valueHour, minutes: valueMinutes, ampm: valueAmPm } = normalizeValue(
                value,
                hour24,
            );
            hour = valueHour || '';
            minutes = valueMinutes || '';
            ampm = valueAmPm || '';
        }
        const hourPlaceholder = this.prevHour || '--';
        const minutesPlaceholder = this.prevMinutes || '--';

        return (
            <StyledContainer className={className} style={style} id={id}>
                <RenderIf isTrue={!!label}>
                    <StyledLabel
                        label={label}
                        hideLabel={hideLabel}
                        required={required}
                        inputId="timeselectinput-label"
                    />
                </RenderIf>
                <StyledSelectContent
                    ref={this.containerRef}
                    onKeyDown={this.handleKeyDown}
                    onClick={this.handleClick}
                    onFocus={onFocus}
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
                        disabled={disabled}
                        readOnly={readOnly}
                        tabIndex={tabIndex || null}
                    />

                    <StyledDots disabled={disabled} readOnly={readOnly}>
                        :
                    </StyledDots>

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
                        disabled={disabled}
                        readOnly={readOnly}
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
                            disabled={disabled}
                            readOnly={readOnly}
                        />
                    </RenderIf>

                    <StyledVerticalButtonsContainer>
                        <ButtonIcon
                            id="time-picker_up-button"
                            tabIndex="-1"
                            variant="border-filled"
                            icon={<StyledUpArrow disabled={disabled} readOnly={readOnly} />}
                            size="small"
                            onMouseDown={this.handleButtonsDown}
                            onClick={this.incrementHandler}
                            onFocus={this.handleButtonsFocus}
                            assistiveText="Next value"
                            disabled={disabled || readOnly}
                        />

                        <ButtonIcon
                            id="time-picker_down-button"
                            tabIndex="-1"
                            variant="border-filled"
                            icon={<StyledDownArrow disabled={disabled} readOnly={readOnly} />}
                            size="small"
                            onMouseDown={this.handleButtonsDown}
                            onClick={this.decrementHandler}
                            onFocus={this.handleButtonsFocus}
                            assistiveText="Previous value"
                            disabled={disabled || readOnly}
                        />
                    </StyledVerticalButtonsContainer>
                </StyledSelectContent>
                <RenderIf isTrue={!!bottomHelpText}>
                    <StyledHelpText>{bottomHelpText}</StyledHelpText>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <StyledErrorText>{error}</StyledErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

TimeSelectInput.propTypes = {
    /** Sets the date for the TimeSelectInput programmatically. */
    value: PropTypes.string,
    /** Text label for the TimeSelectInput. */
    label: PropTypes.node,
    /** A boolean to hide the TimeSelectInput label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the TimeSelectInput must be filled out before submitting the form. */
    required: PropTypes.bool,
    /** Shows the help message below the TimeSelectInput. */
    bottomHelpText: PropTypes.node,
    /** Specifies that the TimeSelectInput must be filled out before submitting the form. */
    error: PropTypes.node,
    /** Specifies that the TimeSelectInput is read-only. */
    readOnly: PropTypes.bool,
    /** Specifies that the TimeSelectInput element should be disabled. */
    disabled: PropTypes.bool,
    /** Specifies the tab order (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Specifies that the TimeSelectInput will be in a 24hr format. */
    hour24: PropTypes.bool,
};

TimeSelectInput.defaultProps = {
    value: undefined,
    label: undefined,
    hideLabel: false,
    required: false,
    bottomHelpText: null,
    error: null,
    readOnly: false,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    hour24: false,
};
