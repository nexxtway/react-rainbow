import React from 'react';
import PropTypes from 'prop-types';
import StyledHours from './styled/hours';
import StyledHour from './styled/hour';

export default function Hours(props) {
    const { locale } = props;
    function ListHours() {
        const date = new Date();
        date.setMinutes(0);
        const hours = [];

        for (let i = 0; i < 24; i += 1) {
            date.setHours(i);
            hours.push(
                <StyledHour key={date.getHours()}>
                    <span>
                        {new Intl.DateTimeFormat(locale, {
                            hour: 'numeric',
                            hour12: true,
                        }).format(date)}
                    </span>
                </StyledHour>,
            );
        }
        return hours;
    }

    return (
        <StyledHours>
            <ListHours />
        </StyledHours>
    );
}

Hours.propTypes = {
    locale: PropTypes.string,
};

Hours.defaultProps = {
    locale: undefined,
};
