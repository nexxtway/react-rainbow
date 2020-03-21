##### Payment Stripe simple

```js
import React, { useState } from 'react';
import { PaymentStripe } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    margin: 30px auto;
    padding: 20px 10px;
`;

const Payment = () => {
    const [payment, setPayment] = useState();

    return (
        <Container>
            <PaymentStripe
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="Credit/Debit Card Information"
                onChange={setPayment}
                error={(payment && payment.error && payment.error.message)}
            />
        </Container>
    );
};
<Payment/>

```

##### Payment Stripe other fields

```js
import React, { useState } from 'react';
import { PaymentStripe, GoogleAddressLookup, Input, Button } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    margin: 20px auto;
    padding: 20px 10px;
`;
const Title = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;
const Field = styled.fieldset`
    margin-bottom: 10px;
`;
const Actions = styled.div`
    display: flex;
    flex-direction: row-reverse
`;
const ErrorText = styled.div`
    font-size: '0.875rem';
    margin-top: '0.5rem';
    align-self: center;
    color: ${props => props.theme.rainbow.palette.error.main};
`;

const searchOptions = { types: ['address'] };

const Payment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState();
    const [saveCard, setSaveCard] = useState(false);
    const [error, setError] = useState();
    const [payment, setPayment] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        if (payment && payment.complete) {
            try {
                //TODO call a sever-side to create a PaymentIntent
                const response = { client_secret: 'client_secret'};
                const result = await payment.stripe.confirmCardPayment(response.client_secret, {
                    payment_method: {
                        card: payment.element,
                        billing_details: {
                            address,
                            name,
                        },
                    },
                    setup_future_usage: saveCard ? 'off_session' : 'on_session',
                });
                if (result.error) {
                    setError(result.error);
                } else {
                    // The payment has been processed!
                    if (result.paymentIntent.status === 'succeeded') {
                        // Show a success message to your customer
                        // There's a risk of the customer closing the window before callback
                        // execution. Set up a webhook or plugin to listen for the
                        // payment_intent.succeeded event that handles any business critical
                        // post-payment actions.
                    }
                }
            } catch (e) {
                setError(e.message);
            }
        }
    };

    return (
        <Container>
            <Title>Complete your payment</Title>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Input
                        label="Name on Card"
                        placeholder="Name on Card"
                        value={name}
                        icon={<UserIcon/>}
                        onChange={event => setName(event.currentTarget.value)}
                        required
                    />
                </Field>
                <Field>
                    <PaymentStripe
                        apiKey={LIBRARY_STRIPE_APIKEY}
                        label="Card Number"
                        onChange={setPayment}
                        error={(payment && payment.error && payment.error.message)}
                    />
                </Field>
                <Field>
                    <GoogleAddressLookup
                        label="Address"
                        placeholder="Enter location"
                        value={address}
                        onChange={setAddress}
                        apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
                        searchOptions={searchOptions}
                    />
                </Field>
                <Field>
                    <Input
                        label="Save Card for the next time"
                        type="checkbox"
                        value={saveCard}
                        onChange={event => setSaveCard(event.currentTarget.checked)}
                    />
                </Field>
                <Actions>
                    <Button
                        label="Pay $85"
                        disabled={(!payment || !payment.complete )}
                        variant="brand"
                        type="submit"
                    />
                </Actions>
            </form>
            <ErrorText>{error}</ErrorText>
        </Container>
    );
};
<Payment/>

```
