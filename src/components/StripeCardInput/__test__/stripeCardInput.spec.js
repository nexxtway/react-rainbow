import React from 'react';
import { mount } from 'enzyme';
import StripeCardInput from '..';

jest.mock('@stripe/stripe-js', () => {
    return {
        loadStripe: jest.fn(() => Promise.resolve()),
    };
});

jest.mock('@stripe/react-stripe-js', () => {
    return {
        // eslint-disable-next-line react/prop-types
        Elements: props => <div>{props.children}</div>,
        // eslint-disable-next-line react/prop-types
        CardElement: ({ onChange }) => <input onChange={onChange} />,
        useElements: jest.fn().mockReturnValue({
            getElement: jest.fn().mockReturnValue({}),
        }),
        useStripe: jest.fn().mockReturnValue({}),
    };
});

const error = {
    code: 'invalid_number',
    type: 'validation_error',
    message: 'Your card number is invalid.',
};
const event = {
    error,
    empty: false,
    complete: false,
    brand: 'unknown',
};

describe('<StripeCardInput>', () => {
    it('should fire onChange with specific event', () => {
        const onChangeMockFn = jest.fn();
        const component = mount(
            <StripeCardInput apiKey="STRIPE_API_KEY" onChange={onChangeMockFn} />,
        );
        component.find('input').simulate('change', event);
        expect(onChangeMockFn).toHaveBeenCalledWith({
            cardBrand: 'unknown',
            iEmpty: false,
            isComplete: false,
            error,
            stripe: {},
            card: {},
        });
    });
});
