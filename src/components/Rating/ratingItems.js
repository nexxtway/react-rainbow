import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

export default function RatingItems(props) {
    const { onChange, value, name, readOnly } = props;

    return Array(5)
        .fill(0)
        .map((item, index) => {
            const key = `star-${index}`;
            const filled = index < Math.ceil(value);
            const half = value < index + 1 && !Number.isInteger(Number(value));
            return (
                <Star
                    key={key}
                    name={name}
                    onChange={onChange}
                    value={index + 1}
                    filled={filled}
                    half={half}
                    readOnly={readOnly}
                />
            );
        });
}

RatingItems.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
};

RatingItems.defaultProps = {
    value: undefined,
    onChange: () => {},
    name: undefined,
    readOnly: false,
};
