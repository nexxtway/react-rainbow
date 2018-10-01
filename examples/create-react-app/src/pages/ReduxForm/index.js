/* eslint-disable no-script-url, no-console */
import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import SignInForm from './form';

export default function SignInExample() {
    return (
        <div className="rainbow-align-content_center rainbow-flex_column rainbow-sign-in_view-port">
            <Card className="rainbow-p-around_x-large rainbow-sign-in_card-container">
                <h1 className="rainbow-font-size-heading_medium rainbow-color_brand rainbow-sign-in_title">
                    Sign in
                </h1>
                <SignInForm onSubmit={values => console.log(values)} />
                <a href="javascript:void(0);" className="rainbow-font-size-heading_small rainbow-color_brand rainbow-align-content_center">
                    forgot your password?
                </a>
            </Card>
        </div>
    );
}
