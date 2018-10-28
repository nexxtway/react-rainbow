import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

export default function RatingItems(props) {
    const {
        onChange,
        value,
    } = props;

    return Array(5).fill(0).map((item, index) => {
        const key = `star-${index}`;
        const filled = index < value;
        return (
            <Star
                key={key}
                onChange={onChange}
                value={index + 1}
                filled={filled} />
        );
    });
}

RatingItems.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

RatingItems.defaultProps = {
    value: undefined,
    onChange: () => {},
};
