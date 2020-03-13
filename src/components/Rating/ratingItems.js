import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

export default function RatingItems(props) {
    const { onChange, value, name, readOnly } = props;

    return Array(5)
        .fill(0)
        .map((item, index) => {
            const key = `star-${index}`;
            const normalizedValue = readOnly ? Math.ceil(value) : Math.round(value);
            const isFilled = index < normalizedValue;
            const isHalf =
                readOnly && Number(value) < index + 1 && !Number.isInteger(Number(value));
            return (
                <Star
                    key={key}
                    name={name}
                    onChange={onChange}
                    value={index + 1}
                    isFilled={isFilled}
                    isHalf={isHalf}
                    readOnly={readOnly}
                />
            );
        });
}

RatingItems.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
};

RatingItems.defaultProps = {
    value: 0,
    onChange: () => {},
    name: undefined,
    readOnly: false,
};
