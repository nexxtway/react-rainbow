import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../libs/hooks';
import SingleCalendar from './singleCalendar';
import { buildNewRangeFromValue } from './helpers';
import { useCurrentDateFromValue, useRangeFromValue } from './hooks';

/**
 * Calendar provide a simple way to select a single date.
 */
export default function Calendar(props) {
    const { locale, selectionType, value, onChange, ...rest } = props;
    const currentLocale = useLocale(locale);
    const currentValue = useCurrentDateFromValue(value);
    const range = useRangeFromValue(value, selectionType);

    const handleChange = useCallback(
        newValue => {
            if (selectionType === 'single') return onChange(newValue);
            return onChange(buildNewRangeFromValue(newValue, range));
        },
        [onChange, selectionType, range],
    );

    return (
        <SingleCalendar
            locale={currentLocale}
            value={currentValue}
            selectedRange={range}
            selectionType={selectionType}
            onChange={handleChange}
            {...rest}
        />
    );
}

export { SingleCalendar as Component };

Calendar.propTypes = {
    /** Sets the date for the Calendar programmatically. */
    // value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The component locale. If the locale is not passed, it defaults to the context language, and if the context language is not passed, it will default to the browser's language. */
    locale: PropTypes.string,
    /** The type of the selection. It can be a single date or a range. The default value is 'single'. */
    selectionType: PropTypes.oneOf(['single', 'range']),
};

Calendar.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    locale: undefined,
    selectionType: 'single',
};
