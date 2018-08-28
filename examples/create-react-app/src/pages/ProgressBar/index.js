import React from 'react';
import ProgressBar from 'react-slds/components/ProgressBar';

export default function ProgressBarExample() {
    return (
        <div>
            <div className="slds-p-around_x-large" >
                <ProgressBar value={25} />
            </div>
            <div className="slds-p-around_x-large" >
                <ProgressBar value={50} color="success" />
            </div>
            <div className="slds-p-around_x-large" >
                <ProgressBar value={75} variant="circular" />
            </div>
        </div>
    );
}
