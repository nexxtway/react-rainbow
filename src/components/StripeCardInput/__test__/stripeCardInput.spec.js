import React from 'react';
import { mount } from 'enzyme';
import { Component as StripeCardInput } from '..';

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
const elementMock = {
    mount: jest.fn(),
    on: jest.fn((eventType = 'change', callback) => {
        if (eventType === 'change') {
            callback(event);
        }
    }),
};
const elementsMock = {
    create: jest.fn().mockReturnValue(elementMock),
};
const stripeMock = {
    elements: jest.fn().mockReturnValue(elementsMock),
};
window.Stripe = jest.fn().mockReturnValue(stripeMock);

describe('<StripeCardInput>', () => {
    it('should fire onChange with specific event', done => {
        const onChangeMockFn = e => {
            expect(e).toEqual({
                cardBrand: 'unknown',
                isEmpty: false,
                isComplete: false,
                error,
                stripe: stripeMock,
                card: elementMock,
            });
            done();
        };
        mount(
            <StripeCardInput
                apiKey="STRIPE_API_KEY"
                isScriptLoaded
                isScriptLoadSucceed
                onChange={onChangeMockFn}
            />,
        );
    });
});
