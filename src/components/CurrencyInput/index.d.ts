import { CurrencyInputProps } from './index.d';
import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps, IconPosition, LabelAlignment } from '../types';

export interface CurrencyInputProps extends BaseProps {
    value?: number | string;
    name?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    bottomHelpText?: ReactNode;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    onChange?: (value?: string) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id?: string;
    variant?: 'default' | 'shaded' | 'bare';
    locale?: string;
    currency?: string;
    currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    currencySign?: 'standard' | 'accounting';
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
}

export default function(props: CurrencyInputProps): JSX.Element | null;
