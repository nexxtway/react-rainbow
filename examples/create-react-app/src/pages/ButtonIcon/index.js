import React from 'react';
import ButtonIcon from 'react-slds/components/ButtonIcon';

export default function ButtonIconExample() {
    return (
        <div>
            <ButtonIcon iconName="utility:user" />
            <ButtonIcon iconName="utility:settings" variant="brand" />
        </div>
    );
}
