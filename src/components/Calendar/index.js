/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { getLocale } from '../../libs/utils';
import { Consumer } from '../Application/context';
import SingleCalendar from './singleCalendar';
import DoubleCalendar from './doubleCalendar';

/**
 * Calendar provide a simple way to select a single date.
 */
export default function Calendar({ locale, variant, ...rest }) {
    if (variant === 'double')
        return (
            <Consumer>
                {values => <DoubleCalendar locale={getLocale(values, locale)} {...rest} />}
            </Consumer>
        );

    return (
        <Consumer>
            {values => <SingleCalendar locale={getLocale(values, locale)} {...rest} />}
        </Consumer>
    );
}

export { SingleCalendar as Component };

Calendar.propTypes = {
    /** Sets the date for the Calendar programmatically. */
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
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
    /** The component variant. Defaults to 'single' */
    variant: PropTypes.oneOf(['single', 'double']),
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
    variant: 'single',
};
