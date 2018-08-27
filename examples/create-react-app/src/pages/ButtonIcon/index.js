import React from 'react';
import ButtonIcon from 'react-slds/components/ButtonIcon';

export default function ButtonIconExample() {
    return (
        <div>
            <div className="slds-m-horizontal_medium">
                <ButtonIcon iconName="utility:user" />
            </div>
            <div className="slds-m-horizontal_medium">
                <ButtonIcon iconName="utility:settings" variant="brand" />
            </div>
        </div>
    );
}
