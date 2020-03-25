import React from 'react';
import PropTypes from 'prop-types';
import Hour from './hour';

export default function Week(props) {
    const { currentWeek, onChange } = props;

    function Hours() {
        const date = new Date(currentWeek);
        const hours = [];

        for (let i = 0; i < 24; i += 1) {
            date.setHours(i);
            hours.push(<Hour currentWeek={currentWeek} hour={i} key={i} onChange={onChange} />);
        }
        return hours;
    }

    return (
        <tbody>
            <Hours />
        </tbody>
    );
}

Week.propTypes = {
    currentWeek: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

Week.defaultProps = {
    currentWeek: undefined,
    onChange: () => {},
};
