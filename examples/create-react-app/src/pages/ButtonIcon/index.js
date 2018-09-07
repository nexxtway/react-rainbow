import React from 'react';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export default function ButtonIconExample() {
    return (
        <div>
            <ButtonIcon icon={<FontAwesomeIcon icon={faUser} />} />
            <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} variant="brand" />
        </div>
    );
}
