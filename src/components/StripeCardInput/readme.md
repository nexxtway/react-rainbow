##### Payment Stripe simple

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 500px;
    margin: 30px auto;
    padding: 20px 10px;
`;

const Payment = () => {
    const [card, setCard] = useState();

    return (
        <Container>
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="Credit/Debit Card Information"
                onChange={setCard}
                error={(card && card.error && card.error.message)}
            />
        </Container>
    );
};
<Payment/>

```

##### Payment Stripe other fields

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput, GoogleAddressLookup, Input, Button } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 500px;
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
    margin-bottom: 24px;
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
    const [card, setCard] = useState();
    const handleSubmit = async event => {
        event.preventDefault();

        if (card && card.isComplete) {
            try {
                const result = await card.stripe.confirmCardPayment('{CLIENT_SECRET}', {
                    payment_method: {
                        card: card.element,
                        billing_details: {
                            name,
                            address: address.address_components,
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
                    <StripeCardInput
                        apiKey={LIBRARY_STRIPE_APIKEY}
                        label="Card Number"
                        onChange={setCard}
                        error={(card && card.error && card.error.message)}
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
                        required
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
                        disabled={(!card || !card.isComplete )}
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
