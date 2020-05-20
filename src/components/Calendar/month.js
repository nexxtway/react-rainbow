import React from 'react';
import PropTypes from 'prop-types';
import { getLastDayMonth } from './helpers';
import { useWeeksBuilder } from './hooks';

export default function Month(props) {
    const { firstDayMonth, value, minDate, maxDate, onChange } = props;
    const lastDayMonth = getLastDayMonth(firstDayMonth);
    const Weeks = useWeeksBuilder(value, firstDayMonth, lastDayMonth, minDate, maxDate, onChange);

    return <tbody>{Weeks}</tbody>;
}

Month.propTypes = {
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onChange: PropTypes.func,
};

Month.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    value: undefined,
    onChange: () => {},
};
