import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ProgressRing({ percent }) {
    const [percentValue, setPercentValue] = useState(0);
    useEffect(() => {
        setPercentValue(percent);
    }, [percent]);

    return (
        <div className="rainbow-progress-circular_ring">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="140"
                height="140"
                viewBox="-16.8 -16.8 33.6 33.6"
            >
                <circle
                    className="rainbow-progress-circular_ring-path"
                    strokeWidth="1.6"
                    fill="none"
                    cx="0"
                    cy="0"
                    r="16"
                />
                <circle
                    className="rainbow-progress-circular_ring-fill-percent"
                    strokeWidth="1.6"
                    strokeDasharray={`${percentValue} ${100 - percentValue}`}
                    fill="none"
                    cx="0"
                    cy="0"
                    r="16"
                    transform="rotate(-90)"
                />
            </svg>
        </div>
    );
}

ProgressRing.propTypes = {
    percent: PropTypes.number.isRequired,
};
