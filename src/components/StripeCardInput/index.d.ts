import { ReactNode } from 'react';
import { Stripe, StripeElement } from '@stripe/stripe-js';
import { BaseProps } from '../types';

type Error = {
    type: 'validation_error';
    code: string;
    message: string;
};
interface StripeCardEvent {
    stripe: Stripe;
    element: StripeElement;
    isEmpty: boolean;
    isComplete: boolean;
    brand: 'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'jcb' | 'unionpay' | 'unknown';
    error?: Error;
}

export interface StripeCardInput extends BaseProps {
    apiKey: string;
    label?: ReactNode;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    disabled?: boolean;
    onChange?: (event: StripeCardEvent) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

export default function(props: StripeCardInput): JSX.Element | null;
