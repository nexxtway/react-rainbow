##### Payment Stripe simple

```js
import React, { useState } from 'react';
import { PaymentStripe, Button, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
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
const TestContainer = styled.div`
    margin-top: 20px;
    text-align: left;
    color: ${props => props.theme.rainbow.palette.text.main};

    h2 {
        text-align: center;
        font-size: 1rem;
        margin-bottom: 20px;
        color: ${props => props.theme.rainbow.palette.brand.main};
    }

    p, li {
        margin-bottom: 10px;
    }
`;

const Payment = () => {
    const [ payment, setPayment ] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        if (!payment || !payment.stripe || !payment.complete ) {
            return;
        }
        try {
            const response = { client_secret: 'client_secret'};
            const result = await payment.stripe.confirmCardPayment(response.client_secret, {
                payment_method: {
                    card: payment.element,
                    billing_details: {
                        ...payment.billingDetails,
                    },
                },
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
    };

    return (
        <Container>
            <Title>Complete your Donation</Title>
            <form onSubmit={handleSubmit}>
                <Field>
                    <PaymentStripe
                        apiKey={LIBRARY_STRIPE_APIKEY}
                        onChange={setPayment}
                        error={(payment && payment.error && payment.error.message)}
                    />
                </Field>
                <Actions>
                    <Button
                        label="Donate"
                        disabled={(!payment || !payment.stripe || !payment.complete )}
                        variant="success"
                        type="submit"
                    />
                </Actions>
            </form>
            <TestContainer>
                <h2>Test the integration</h2>
                <p>
                    There are several test cards you can use in test mode to make sure this integration is ready. Use them with any CVC, postal code, and future expiration date.
                </p>
                <ul>
                    <li>
                        <Badge>4242424242424242</Badge>
                        Your integration handles payments that don’t require authentication.
                    </li>
                    <li>
                        <Badge>4000002500003155</Badge>
                        Your integration handles payments that require authentication.
                    </li>
                    <li>
                        <Badge>4000000000009995</Badge>
                        Your integration handles card declines codes like insufficient_funds
                    </li>
                </ul>
            </TestContainer>
        </Container>
    );
};
<Payment/>

```

##### Payment Stripe other fields

```js
import React, { useState } from 'react';
import { PaymentStripe, Input, Button } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 20px 10px;
    text-align: center;
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

const Payment = () => {
    const [name, setName] = useState('');
    const [ error, setError ] = useState();
    const [ payment, setPayment ] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        if (!payment || !payment.stripe || !payment.complete ) {
            return;
        }
        try {
            const response = { client_secret: 'client_secret'};
            const result = await payment.stripe.confirmCardPayment(response.client_secret, {
                payment_method: {
                    card: payment.element,
                    billing_details: {
                        ...payment.billingDetails,
                        name,
                    },
                },
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
    };

    return (
        <Container>
            <Title>Complete your payment</Title>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Input
                        label="Name on Card"
                        placeholder="Jane Doe"
                        value={name}
                        onChange={event => setName(event.currentTarget.value)}
                        required
                    />
                </Field>
                <Field>
                <PaymentStripe
                    apiKey={LIBRARY_STRIPE_APIKEY}
                    onChange={setPayment}
                    error={(payment && payment.error && payment.error.message)}
                />
                </Field>
                <Actions>
                    <Button
                        label="Pay"
                        disabled={(!payment || !payment.stripe || !payment.complete )}
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

##### Payment Stripe set up recurring payments

```js
import React, { useState } from 'react';
import { PaymentStripe, Button } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 20px 10px;
    text-align: center;
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

const Payment = () => {
    const [ error, setError ] = useState();
    const [ payment, setPayment ] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        if (!payment || !payment.stripe || !payment.complete ) {
            return;
        }
        try {
            const response = { client_secret: 'client_secret'};
            const result = await payment.stripe.confirmCardSetup(response.client_secret, {
                payment_method: {
                    card: payment.element,
                    billing_details: {
                        ...payment.billingDetails,
                    }, 
                },
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
    };

    return (
        <Container>
            <Title>Link your card to your account</Title>
            <form onSubmit={handleSubmit}>
                <Field>
                <PaymentStripe
                    apiKey={LIBRARY_STRIPE_APIKEY}
                    onChange={setPayment}
                    error={(payment && payment.error && payment.error.message)}
                    bottomHelpText="I authorise [your business name] to send instructions to the financial institution that issued my card to take payments from my card account in accordance with the terms of my agreement with you."
                />
                </Field>
                <Actions>
                    <Button
                        label="Accept"
                        disabled={(!payment || !payment.stripe || !payment.complete )}
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
