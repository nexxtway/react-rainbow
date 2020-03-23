import { ReactNode } from 'react';
import { Stripe, StripeElement } from '@stripe/stripe-js';
import { BaseProps } from '../types';

interface Payment {
    stripe: Stripe;
    element: StripeElement;
    isEmpty: boolean;
    isComplete: boolean;
    cardBrand:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'discover'
        | 'diners'
        | 'jcb'
        | 'unionpay'
        | 'unknown';
    error:
        | undefined
        | {
              type: 'validation_error';
              code: string;
              message: string;
          };
}

export interface StripeCardInput extends BaseProps {
    apiKey: string;
    label?: ReactNode;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    disabled?: boolean;
    onChange?: (payment: Payment) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

export default function(props: StripeCardInput): JSX.Element | null;
