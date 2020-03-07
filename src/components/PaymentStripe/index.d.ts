import { ReactNode, MouseEvent, FormEvent } from 'react';
import { PaymentIntent, StripeError } from '@stripe/stripe-js';
import { BaseProps } from '../types';

export interface PaymentStripe extends BaseProps {
    apiKeyGMap?: string;
    buttonLabel?: string;
    buttonAlign?: string;
    hasAddress?: bool;
    hasRememberMe?: bool;
    onProcessed?: (result: Promise<{ paymentIntent?: PaymentIntent; error?: StripeError }>) => void;
    onError?: (message: string) => void;
    getPaymentIntent?: () => PaymentIntent;
}

export default function(props: PaymentStripe): JSX.Element | null;
