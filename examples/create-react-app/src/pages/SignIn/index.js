import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import Button from 'react-rainbow-components/components/Button';
import Input from 'react-rainbow-components/components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import './media-queries.css';

export default function SignInExample() {
    return (
        <div className="rainbow-align-content_center rainbow-flex_column rainbow-sign-in_view-port">
            <img
                className="rainbow-m-bottom_x-large rainbow-sign-in_logo"
                src="assets/images/rainbow-logo.svg"
                alt="rainbow-logo" />
            <Card className="rainbow-p-around_x-large rainbow-sign-in_card-container">
                <h1 className="rainbow-font-size-heading_medium rainbow-color_brand rainbow-sign-in_title">
                    Sign in
                </h1>
                <Input
                    className="rainbow-m-bottom_large"
                    label="Email Address"
                    required
                    placeholder="Enter your email address"
                    icon={
                        <FontAwesomeIcon icon={faEnvelope} className="rainbow-color_gray-3" />
                    } />
                <Input
                    className="rainbow-m-bottom_large"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    required
                    icon={
                        <FontAwesomeIcon icon={faLock} className="rainbow-color_gray-3" />
                    } />

                <Button
                    className="rainbow-m-bottom_medium rainbow-sign-in_button-sign-in"
                    label="Sign in"
                    variant="brand" />
                <a className="rainbow-font-size-heading_small rainbow-color_brand rainbow-align-content_center">
                    forgot your password?
                </a>
            </Card>
        </div>
    );
}
