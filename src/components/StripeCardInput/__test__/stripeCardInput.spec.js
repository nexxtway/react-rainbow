import React from 'react';
import { mount } from 'enzyme';
import { Component as StripeCardInput } from '..';
import StyledCardInput from '../styled/cardInput';
import Label from '../../Input/label';
import ErrorText from '../../Input/styled/errorText';
import HelpText from '../../Input/styled/helpText';

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
const focusEvent = {
    type: 'focus',
};
const blurEvent = {
    type: 'blur',
};
const elementMock = {
    mount: jest.fn(),
    on: jest.fn((eventType, callback) => {
        if (eventType === 'change') {
            callback(event);
        }
        if (eventType === 'focus') {
            callback(focusEvent);
        }
        if (eventType === 'blur') {
            callback(blurEvent);
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

    it('should fire onFocus', doneFocus => {
        const onFocusMockFn = e => {
            expect(e).toEqual({
                type: 'focus',
            });
            doneFocus();
        };

        mount(
            <StripeCardInput
                apiKey="STRIPE_API_KEY"
                isScriptLoaded
                isScriptLoadSucceed
                onFocus={onFocusMockFn}
            />,
        );
    });

    it('should fire onBlur', doneBlur => {
        const onBlurMockFn = e => {
            expect(e).toEqual({
                type: 'blur',
            });
            doneBlur();
        };

        mount(
            <StripeCardInput
                apiKey="STRIPE_API_KEY"
                isScriptLoaded
                isScriptLoadSucceed
                onBlur={onBlurMockFn}
            />,
        );
    });

    it('should render bottom help text when bottomHelpText prop is passed', () => {
        const component = mount(
            <StripeCardInput
                apiKey="STRIPE_API_KEY"
                isScriptLoaded
                isScriptLoadSucceed
                bottomHelpText="Stripe card input"
            />,
        );
        expect(component.find(HelpText).exists()).toBe(true);
    });

    it('should render an error text when error prop is passed', () => {
        const component = mount(
            <StripeCardInput
                apiKey="STRIPE_API_KEY"
                isScriptLoaded
                isScriptLoadSucceed
                error="An error occurred"
            />,
        );
        expect(component.find(ErrorText).exists()).toBe(true);
    });

    it('should pass the same value to the id of StyledCardInput and the inputId prop of Label component', () => {
        const component = mount(
            <StripeCardInput
                apiKey="STRIPE_API_KEY"
                isScriptLoaded
                isScriptLoadSucceed
                label="Stripe card input"
            />,
        );
        const inputIdProp = component.find(Label).prop('inputId');
        const inputId = component.find(StyledCardInput).prop('id');
        expect(inputIdProp).toBe(inputId);
    });
});
