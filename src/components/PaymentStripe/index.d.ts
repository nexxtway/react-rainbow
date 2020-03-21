import { ReactNode } from 'react';
import { Stripe, StripeElement } from '@stripe/stripe-js';
import { BaseProps } from '../types';

interface Payment {
    stripe?: Stripe;
    element?: StripeElement;
    empty?: boolean;
    complete?: boolean;
    brand?: 'visa' | 'mastercard' | 'amex' | 'discover' | 'diners' | 'jcb' | 'unionpay' | 'unknown';
    error?:
        | undefined
        | {
              type?: 'validation_error';
              code?: string;
              message?: string;
          };
}

export interface PaymentStripe extends BaseProps {
    apiKey?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    iconStyle?: 'default' | 'solid';
    disabled?: boolean;
    onChange?: (payment: Payment) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

export default function(props: PaymentStripe): JSX.Element | null;
