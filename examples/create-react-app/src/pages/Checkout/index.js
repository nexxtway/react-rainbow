import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import CheckboxToggle from 'react-rainbow-components/components/CheckboxToggle';
import Select from 'react-rainbow-components/components/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faMobileAlt,
    faArrowRight,
    faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import './media-queries.css';

const COUNTRY_OPTIONS = [
    { value: 'option 1', label: 'Cuba' },
    { value: 'option 2', label: 'United States' },
    { value: 'option 3', label: 'Mexico' },
];

const CARD_ICON = (
    <span className="rainbow-border-radius_circle rainbow-align-content_center rainbow-checkout_logo">
        <FontAwesomeIcon icon={faDollarSign} size="lg" className="rainbow-color_white" />
    </span>
);

export default function CheckoutExample() {
    return (
        <div className="rainbow-align-content_center rainbow-checkout_view-port">
            <Card className="rainbow-checkout_card-container" icon={CARD_ICON} title="Checkout">
                <div className="rainbow-p-horizontal_x-large rainbow-p-bottom_large rainbow-checkout_media-styles-container">
                    <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_large">
                        <Input
                            className="rainbow-checkout_form-element rainbow-m-right_x-large"
                            label="First Name"
                            required
                            placeholder="Enter your first name"
                        />
                        <Input
                            className="rainbow-checkout_form-element"
                            label="Last Name"
                            placeholder="Enter your email last name"
                            required
                        />
                    </div>

                    <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_large">
                        <Input
                            className="rainbow-checkout_form-element rainbow-m-right_x-large"
                            label="Email Address"
                            required
                            placeholder="Enter your email address"
                            icon={
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="rainbow-color_gray-3"
                                />
                            }
                        />
                        <Select
                            label="Country"
                            className="rainbow-checkout_form-element"
                            options={COUNTRY_OPTIONS}
                            required
                        />
                    </div>

                    <Input
                        className="rainbow-m-bottom_large"
                        label="Address"
                        placeholder="Enter your address"
                    />

                    <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_large">
                        <Input
                            className="rainbow-checkout_form-element rainbow-m-right_x-large"
                            label="Zip Code"
                            placeholder="Enter your zip code"
                        />
                        <Input
                            className="rainbow-checkout_form-element"
                            label="Phone Number"
                            placeholder="Enter your phone number"
                            icon={
                                <FontAwesomeIcon
                                    icon={faMobileAlt}
                                    size="lg"
                                    className="rainbow-color_gray-3"
                                />
                            }
                        />
                    </div>
                    <CheckboxToggle
                        className="rainbow-m-bottom_large"
                        label="Save data for the nex time"
                    />
                    <div className="rainbow-flex rainbow-justify_end">
                        <Button variant="brand" className="rainbow-checkout_button">
                            Next
                            <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_small" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
