import React from 'react';
import Spinner from 'react-slds/components/Spinner';

const spinnerTextStyles = {
    color: '#0070d2',
};

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap">
                <div className="slds-m-horizontal_medium slds-m-vertical_xx-large">
                    <Spinner size="medium" />
                </div>
            </div>
            <div className="slds-p-around_x-large" >
                <Spinner value={50} color="success" />
            </div>
            <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap slds-grid_vertical">
                <div className="slds-is-relative slds-m-top_xx-large slds-p-top_xx-large">
                    <Spinner variant="brand" size="large" />
                </div>
                <h1 className="slds-text-heading_small slds-m-vertical_x-large" style={spinnerTextStyles}>Loading…</h1>
            </div>
        </div>
    );
}
