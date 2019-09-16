import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressRing({ percent }) {
    const isLongArc = percent > 50 ? 1 : 0;
    const arcX = Math.cos((2 * Math.PI * percent) / 100);
    const arcY = Math.sin((2 * Math.PI * percent) / 100);

    return (
        <div className="rainbow-progress-circular_ring">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="140"
                height="140"
                viewBox="-1.05 -1.05 2.1 2.1"
            >
                <circle
                    className="rainbow-progress-circular_ring-path"
                    strokeWidth=".1"
                    fill="none"
                    cx="0"
                    cy="0"
                    r="1"
                />
                <path
                    className="rainbow-progress-circular_ring-fill-percent"
                    strokeWidth=".1"
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90)"
                    d={`M 1 0 A 1 1 0 ${isLongArc} 1 ${arcX} ${arcY}`}
                />
            </svg>
        </div>
    );
}

ProgressRing.propTypes = {
    percent: PropTypes.number.isRequired,
};
