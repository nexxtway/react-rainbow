import { ReactNode } from 'react';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';
import { BaseProps, LabelAlignment } from '../types';

export type StripeCardError = {
    type: 'validation_error';
    code: string;
    message: string;
};
export interface StripeCardEvent {
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
    error?: StripeCardError;
}

export interface StripeCardInput extends BaseProps {
    id?: string;
    apiKey: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    onChange?: (event: StripeCardEvent) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
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
