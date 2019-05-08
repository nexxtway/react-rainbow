/* eslint-disable no-script-url, no-console */
import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import CheckoutForm from './form';
import './styles.css';
import './media-queries.css';

const CARD_ICON = (
    <span className="rainbow-border-radius_circle rainbow-align-content_center rainbow-checkout_logo">
        <FontAwesomeIcon icon={faDollarSign} size="lg" className="rainbow-color_white" />
    </span>
);

const initialValues = {
    country: 'cuba',
    saveData: false,
};

function showAlert(values) {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
}

export default function SignInExample() {
    return (
        <div className="rainbow-align-content_center rainbow-checkout_view-port">
            <Card className="rainbow-checkout_card-container" icon={CARD_ICON} title="Checkout">
                <CheckoutForm onSubmit={showAlert} initialValues={initialValues} />
            </Card>
        </div>
    );
}
