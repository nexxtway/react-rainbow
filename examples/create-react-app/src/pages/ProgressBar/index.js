import React from 'react';
import ProgressBar from 'react-rainbow-components/components/ProgressBar';

export default function ProgressBarExample() {
    return (
        <div>
            <div className="rainbow-p-around_x-large">
                <ProgressBar value={25} />
            </div>
            <div className="rainbow-p-around_x-large">
                <ProgressBar value={50} variant="success" />
            </div>
            <div className="rainbow-p-around_x-large">
                <ProgressBar value={75} />
            </div>
        </div>
    );
}
