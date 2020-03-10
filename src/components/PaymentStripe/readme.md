##### Payment Stripe inline

```js
import React, { useState } from 'react';
import { PaymentStripe, RenderIf } from 'react-rainbow-components';
import { loadStripe}  from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
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

const ErrorText = styled.div`
    font-size: '0.875rem';
    margin-top: '0.5rem';
    align-self: center;
    color: ${props => props.theme.rainbow.palette.error.main};
`;

const stripePromise = loadStripe(LIBRARY_STRIPE_APIKEY);
const elementOptions = {
    locale: 'en'
};

const Payment = () => {
    const [ error, setError ] = useState();
    const getPaymentIntent = () => {
        const response = { client_secret: 'CLIENT_SECRET' };
        return response;
    } 
    const onProcessed = result => {
        if (result.paymentIntent.status === 'succeeded') {
            alert('Payment Succeeded')
        }
    };

    return (
        <Container>
            <Title>Complete your payment</Title>
            <Elements stripe={stripePromise} options={elementOptions}>
                <PaymentStripe
                    apiKeyGMap={LIBRARY_GOOGLE_MAPS_APIKEY}
                    onProcessed={onProcessed}
                    getPaymentIntent={getPaymentIntent}
                    onError={({message}) => setError(message)}
                    onChange={event => console.log(event)}
                    inline
                />
            </Elements>
            <ErrorText>{error}</ErrorText>
        </Container>
    );
};

<Payment/>

```

##### Payment Stripe full fields

```js
import React, { useState } from 'react';
import { PaymentStripe, RenderIf } from 'react-rainbow-components';
import { loadStripe}  from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
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

const ErrorText = styled.div`
    font-size: '0.875rem';
    margin-top: '0.5rem';
    align-self: center;
    color: ${props => props.theme.rainbow.palette.error.main};
`;

const stripePromise = loadStripe(LIBRARY_STRIPE_APIKEY);
const elementOptions = {
    locale: 'en'
};

const Payment = () => {
    const [ error, setError ] = useState();
    const getPaymentIntent = () => {
        const response = { client_secret: 'CLIENT_SECRET' };
        return response;
    } 
    const onProcessed = result => {
        if (result.paymentIntent.status === 'succeeded') {
            alert('Payment Succeeded')
        }
    };

    return (
        <Container>
            <Title>Complete your payment</Title>
            <Elements stripe={stripePromise} options={elementOptions}>
                <PaymentStripe
                    apiKeyGMap={LIBRARY_GOOGLE_MAPS_APIKEY}
                    onProcessed={onProcessed}
                    getPaymentIntent={getPaymentIntent}
                    onError={({message}) => setError(message)}
                    onChange={event => console.log(event)}
                    buttonLabel="Pay  $85"
                    hasName
                    hasEmail
                    hasPhone
                    hasAddress
                    hasRememderMe
                />
            </Elements>
            <ErrorText>{error}</ErrorText>
        </Container>
    );
};

<Payment/>

```