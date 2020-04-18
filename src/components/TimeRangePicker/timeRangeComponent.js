import React, { useReducer, useEffect, useRef, useContext, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import StyledTimeRangeContainer from './styled/timeRangeContainer';
import StyledLine from './styled/line';
import PicklistOption from '../PicklistOption';
import extractTimeFromValue from './helpers/extractTimeFromValue';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { AppContext } from '../Application/context';
import { getLocale } from '../../libs/utils';
import generateHours from './helpers/generateHours';
import isInArray from './helpers/isInArray';
import StyledPicklist from './styled/picklist';
import CustomTime from './customTime';
import RenderIf from '../RenderIf';

function reducer(state, action) {
    switch (action.type) {
        case 'setTimeFrom':
            return {
                ...state,
                timeFrom: action.payload,
            };
        case 'setTimeTo':
            return {
                ...state,
                timeTo: action.payload,
            };
        case 'setSelectedTimeFrom':
            return {
                ...state,
                timeFromOption: action.payload,
            };
        case 'setSelectedTimeTo':
            return {
                ...state,
                timeToOption: action.payload,
            };
        case 'setPriorFocused':
            return {
                ...state,
                priorFocused: action.payload,
            };
        case 'setFocused':
            return {
                ...state,
                focused: action.payload,
            };
        case 'setHourFromList':
            return {
                ...state,
                hourFromList: action.payload,
            };
        case 'setHourToList':
            return {
                ...state,
                hourToList: action.payload,
            };
        case 'setOpener':
            return {
                ...state,
                opener: action.payload,
            };
        default:
            throw new Error('Action type undefined');
    }
}

const TimeRangeComponent = React.forwardRef((props, ref) => {
    const {
        value,
        cancelLabel,
        okLabel,
        placeholder,
        readOnly,
        disabled,
        tabIndex,
        onClick,
        onFocus,
        onBlur,
        onChange,
        hour24,
        sharpHours,
        allowCustomTime,
    } = props;

    const timeFromValue = extractTimeFromValue('from', value, hour24, placeholder);
    const timeToValue = extractTimeFromValue('to', value, hour24, placeholder);

    const [state, dispatch] = useReducer(reducer, {
        timeFrom: timeFromValue,
        timeTo: timeToValue,
        priorFocused: undefined,
        focused: undefined,
        timeFromOption: {
            name: timeFromValue,
            label: timeFromValue,
        },
        timeToOption: {
            name: timeToValue,
            label: timeToValue,
        },
        hourFromList: [],
        hourToList: [],
        opener: {
            from: undefined,
            to: undefined,
        },
    });

    const inputFromRef = useRef();
    const inputToRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputFromRef.current.focus();
        },
        click: () => {
            inputFromRef.current.click();
        },
        blur: () => {
            inputToRef.current.blur();
        },
    }));

    const context = useContext(AppContext);
    const locale = getLocale(context);

    useEffect(() => {
        const step = sharpHours ? 60 : 30;
        const hours = generateHours(step, hour24, locale);
        let addTime = false;
        let added = false;

        if (!isInArray(hours, state.timeFrom)) {
            addTime = state.timeFrom;
        }

        const options = hours.map((time, idx) => {
            const key = `timerangepicker-option-from-${idx}`;
            if (!added) {
                const dateAddTime = new Date(`1970/01/01 ${addTime}`);
                const dateTime = new Date(`1970/01/01 ${time}`);
                const nextHour = hours[idx + 1] || '23:59:59';
                const dateNextHour = new Date(`1970/01/01 ${nextHour}`);
                if (addTime && dateAddTime > dateTime && dateAddTime < dateNextHour) {
                    added = true;
                    const keyNewTime = `timerangepicker-new-option-from-${idx}`;
                    return (
                        <React.Fragment key={`${keyNewTime}-fragment`}>
                            <PicklistOption key={key} name={time} label={time} />
                            <PicklistOption key={keyNewTime} name={addTime} label={addTime} />
                        </React.Fragment>
                    );
                }
            }

            return <PicklistOption key={key} name={time} label={time} />;
        });

        dispatch({ type: 'setHourFromList', payload: options });
    }, [locale, hour24, sharpHours, state.timeFrom]);

    useEffect(() => {
        const step = sharpHours ? 60 : 30;
        const hours = generateHours(step, hour24, locale);
        let addTime = false;
        let added = false;

        if (!isInArray(hours, state.timeTo)) {
            addTime = state.timeTo;
        }

        const options = hours.map((time, idx) => {
            const key = `timerangepicker-option-to-${idx}`;
            if (!added) {
                const dateAddTime = new Date(`1970/01/01 ${addTime}`);
                const dateTime = new Date(`1970/01/01 ${time}`);
                const nextHour = hours[idx + 1] || '23:59:59';
                const dateNextHour = new Date(`1970/01/01 ${nextHour}`);
                if (addTime && dateAddTime > dateTime && dateAddTime < dateNextHour) {
                    added = true;
                    const keyNewTime = `timerangepicker-new-option-to-${idx}`;
                    return (
                        <React.Fragment key={`${keyNewTime}-fragment`}>
                            <PicklistOption key={key} name={time} label={time} />
                            <PicklistOption key={keyNewTime} name={addTime} label={addTime} />
                        </React.Fragment>
                    );
                }
            }

            return <PicklistOption key={key} name={time} label={time} />;
        });

        dispatch({ type: 'setHourToList', payload: options });
    }, [locale, hour24, sharpHours, state.timeTo]);

    const resetOpener = () => {
        dispatch({ type: 'setOpener', payload: { from: false, to: false } });
    };

    const toggleOpener = opener => {
        if (opener) {
            if (opener.from) {
                if (opener.from && state.opener.from) {
                    resetOpener();
                } else {
                    dispatch({ type: 'setOpener', payload: { from: true, to: false } });
                }
            }
            if (opener.to) {
                if (state.opener.to) {
                    resetOpener();
                } else {
                    dispatch({ type: 'setOpener', payload: { from: false, to: true } });
                }
            }
        } else {
            resetOpener();
        }
    };

    const handleTimeFromChange = time => {
        setTimeout(() => inputFromRef.current.focus(), 0);
        dispatch({ type: 'setTimeFrom', payload: time.name });
        dispatch({
            type: 'setSelectedTimeFrom',
            payload: time,
        });
        onChange(`${time.name} - ${state.timeTo}`);
        toggleOpener({ from: true });
    };

    const handleTimeToChange = time => {
        setTimeout(() => inputToRef.current.focus(), 0);
        dispatch({ type: 'setTimeTo', payload: time.name });
        dispatch({
            type: 'setSelectedTimeTo',
            payload: time,
        });
        onChange(`${state.timeFrom} - ${time.name}`);
        toggleOpener({ to: true });
    };

    const handleTimeFromClick = (...args) => {
        onClick(...args);
        setTimeout(() => toggleOpener({ from: true }), 0);
    };

    const handleTimeToClick = (...args) => {
        onClick(...args);
        setTimeout(() => toggleOpener({ to: true }), 0);
    };

    const handleTimeFromBlur = time => {
        if (state.priorFocused === 'to') {
            dispatch({ type: 'setPriorFocused', payload: undefined });
            onBlur(`${time.name} - ${state.timeTo}`);
        }
        setTimeout(() => resetOpener(), 0);
    };

    const handleTimeToBlur = time => {
        if (state.priorFocused === 'from') {
            dispatch({ type: 'setPriorFocused', payload: undefined });
            onBlur(`${state.timeFrom} - ${time.name}`);
        }
        setTimeout(() => resetOpener(), 0);
    };

    const handleTimeFromFocus = time => {
        if (state.focused === 'to') {
            dispatch({ type: 'setPriorFocused', payload: 'to' });
        }
        dispatch({ type: 'setFocused', payload: 'from' });
        onFocus(`${time.name} - ${state.timeTo}`);
    };

    const handleTimeToFocus = time => {
        if (state.focused === 'from') {
            dispatch({ type: 'setPriorFocused', payload: 'from' });
        }
        dispatch({ type: 'setFocused', payload: 'to' });
        onFocus(`${state.timeFrom} - ${time.name}`);
    };

    const handleCustomTimeChange = time => {
        if (state.focused === 'from') {
            setTimeout(() => inputFromRef.current.focus(), 0);
            const formattedTime = extractTimeFromValue('from', time, hour24, placeholder);
            const formattedValue = {
                name: formattedTime,
                label: formattedTime,
            };
            handleTimeFromChange(formattedValue);
            handleTimeFromBlur(formattedValue);
        }
        if (state.focused === 'to') {
            setTimeout(() => inputToRef.current.focus(), 0);
            const formattedTime = extractTimeFromValue(
                'to',
                `${time}-${time}`,
                hour24,
                placeholder,
            );
            const formattedValue = {
                name: formattedTime,
                label: formattedTime,
            };
            handleTimeToChange(formattedValue);
            handleTimeToBlur(formattedValue);
        }
    };

    return (
        <StyledTimeRangeContainer>
            <RenderIf isTrue={allowCustomTime}>
                <CustomTime
                    hour24={hour24}
                    cancelLabel={cancelLabel}
                    okLabel={okLabel}
                    onChange={handleCustomTimeChange}
                    onBlur={resetOpener}
                    opener={state.opener}
                />
            </RenderIf>
            <StyledPicklist
                id="timerangepicker-from"
                key="timerangepicker-from"
                placeholder={placeholder}
                onChange={handleTimeFromChange}
                onClick={handleTimeFromClick}
                onBlur={handleTimeFromBlur}
                onFocus={handleTimeFromFocus}
                value={state.timeFromOption}
                label="Select Time From"
                hideLabel
                hour24
                ref={inputFromRef}
                disabled={disabled}
                readOnly={readOnly}
                tabIndex={tabIndex || null}
            >
                {state.hourFromList}
            </StyledPicklist>
            <StyledLine />
            <StyledPicklist
                id="timerangepicker-to"
                key="timerangepicker-to"
                placeholder={placeholder}
                onChange={handleTimeToChange}
                onClick={handleTimeToClick}
                onBlur={handleTimeToBlur}
                onFocus={handleTimeToFocus}
                value={state.timeToOption}
                label="Select Time To"
                hideLabel
                hour24
                ref={inputToRef}
                disabled={disabled}
                readOnly={readOnly}
                tabIndex={tabIndex + 1 || null}
            >
                {state.hourToList}
            </StyledPicklist>
        </StyledTimeRangeContainer>
    );
});

TimeRangeComponent.propTypes = {
    value: PropTypes.string,
    cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    hour24: PropTypes.bool,
    allowCustomTime: PropTypes.bool,
};

TimeRangeComponent.defaultProps = {
    value: undefined,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    onChange: () => {},
    placeholder: null,
    readOnly: false,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    hour24: false,
    allowCustomTime: false,
};

export default withReduxForm(TimeRangeComponent);
