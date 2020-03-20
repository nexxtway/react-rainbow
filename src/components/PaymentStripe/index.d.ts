import { ReactNode } from 'react';
import {
    Stripe,
    StripeElement,
    StripeCardElementChangeEvent,
    StripeError,
} from '@stripe/stripe-js';
import { BaseProps } from '../types';

interface Payment extends StripeCardElementChangeEvent {
    stripe?: Stripe;
    element?: StripeElement;
}

export interface PaymentStripe extends BaseProps {
    apiKey?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    hidePostalCode?: boolean;
    hideIcon?: boolean;
    iconStyle?: 'default' | 'solid';
    disabled?: boolean;
    postalCode?: string;
    onChange?: (payment: Payment) => void;
    onReady?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

export default function(props: PaymentStripe): JSX.Element | null;
