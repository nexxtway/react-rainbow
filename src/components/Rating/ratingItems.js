import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

export default function RatingItems(props) {
    const { onChange, value, name, readOnly } = props;

    return Array(5)
        .fill(0)
        .map((item, index) => {
            const key = `star-${index}`;
            const isFilled = index < Math.ceil(value);
            const isHalf = value < index + 1 && !Number.isInteger(Number(value));
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
