##### StripeCardInput simple

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
`;

const Payment = () => {
    const [stripeCard, setStripeCard] = useState();

    return (
        <Container>
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="Credit/Debit Card Information"
                onChange={setStripeCard}
                error={(stripeCard && stripeCard.error && stripeCard.error.message)}
            />
        </Container>
    );
};
    <Payment/>

```

##### StripeCardInput other fields

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput, GoogleAddressLookup, Input, Button } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 36px auto;
    padding: 20px 10px;
`;
const Title = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 32px;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;
const Field = styled.fieldset`
    margin-top: 20px;
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
    const [stripeCard, setStripeCard] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        const { stripe, card, isComplete } = stripeCard;

        if (isComplete) {
            try {
                const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
                    payment_method: {
                        card,
                        billing_details: {
                            name,
                            address: address.address_components,
                        },
                    },
                    setup_future_usage: saveCard ? 'off_session' : 'on_session',
                });
                if (result.error) {
                    setError(result.error);
                } else if (result.paymentIntent.status === 'succeeded') {
                    // The payment has been processed!
                    // Show a success message to your customer
                }
            } catch (err) {
                setError(err.message);
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
                        label="Credit/Debit Card"
                        onChange={setStripeCard}
                        error={(stripeCard && stripeCard.error && stripeCard.error.message)}
                        required
                    />
                </Field>
                <Field>
                    <GoogleAddressLookup
                        label="Address"
                        placeholder="Enter your address"
                        value={address}
                        onChange={setAddress}
                        apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
                        searchOptions={searchOptions}
                        required
                    />
                </Field>
                <Input
                    label="Save Card for the next time"
                    type="checkbox"
                    value={saveCard}
                    onChange={event => setSaveCard(event.currentTarget.checked)}
                />
                <Actions>
                    <Button
                        label="Pay $85"
                        disabled={(!stripeCard || !stripeCard.isComplete )}
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

##### StripeCardInput disabled

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
`;

const Payment = () => {
    const [stripeCard, setStripeCard] = useState();

    return (
        <Container>
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="Credit/Debit Card Information"
                onChange={setStripeCard}
                error={(stripeCard && stripeCard.error && stripeCard.error.message)}
                disabled
            />
        </Container>
    );
};
    <Payment/>
```

##### StripeCardInput with different sizes

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
`;

const Payment = () => {
    const [stripeCard1, setStripeCard1] = useState();
    const [stripeCard2, setStripeCard2] = useState();
    const [stripeCard3, setStripeCard3] = useState();

    return (
        <Container>
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="StripeCardInput with small size"
                value={stripeCard1}
                onChange={setStripeCard1}
                size="small"
                style={{ marginBottom: '20px' }}
            />
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="StripeCardInput with medium size"
                value={stripeCard2}
                onChange={setStripeCard2}
                style={{ marginBottom: '20px' }}
            />
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                value={stripeCard3}
                label="StripeCardInput with large size"
                onChange={setStripeCard3}
                size="large"
            />
        </Container>
    );
};
    <Payment/>

```

##### StripeCardInput with different border radius

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { StripeCardInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
`;

const Payment = () => {
    const [stripeCard1, setStripeCard1] = useState();
    const [stripeCard2, setStripeCard2] = useState();
    const [stripeCard3, setStripeCard3] = useState();
    const [stripeCard4, setStripeCard4] = useState();

    return (
        <Container>
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="StripeCardInput with border radius square"
                value={stripeCard1}
                onChange={setStripeCard1}
                borderRadius="square"
                style={{ marginBottom: '20px' }}
            />
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                label="StripeCardInput with border radius semi-square"
                value={stripeCard2}
                onChange={setStripeCard2}
                borderRadius="semi-square"
                style={{ marginBottom: '20px' }}
            />
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                value={stripeCard3}
                label="StripeCardInput with border radius semi-rounded"
                onChange={setStripeCard3}
                borderRadius="semi-rounded"
            />
            <StripeCardInput
                apiKey={LIBRARY_STRIPE_APIKEY}
                value={stripeCard4}
                label="StripeCardInput with border radius rounded"
                onChange={setStripeCard4}
                borderRadius="rounded"
            />
        </Container>
    );
};
    <Payment/>

```