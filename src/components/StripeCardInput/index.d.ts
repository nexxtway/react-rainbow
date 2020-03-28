import { ReactNode } from 'react';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';
import { BaseProps } from '../types';

type Error = {
    type: 'validation_error';
    code: string;
    message: string;
};
interface StripeCardEvent {
    stripe: Stripe;
    card: StripeCardElement;
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
    error?: Error;
}

export interface StripeCardInput extends BaseProps {
    apiKey: string;
    label?: ReactNode;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    disabled?: boolean;
    tabIndex?: number | string;
    required?: boolean;
    onChange?: (event: StripeCardEvent) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    locale?:
        | 'ar'
        | 'da'
        | 'de'
        | 'en'
        | 'es'
        | 'fi'
        | 'fr'
        | 'he'
        | 'it'
        | 'ja'
        | 'lt'
        | 'lv'
        | 'ms'
        | 'nb'
        | 'nl'
        | 'pl'
        | 'pt'
        | 'pt-BR'
        | 'ru'
        | 'sv'
        | 'zh';
}

export default function(props: StripeCardInput): JSX.Element | null;
