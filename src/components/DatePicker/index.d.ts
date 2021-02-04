import { ReactNode, MouseEvent, ComponentType } from 'react';
import { BaseProps, LabelAlignment } from '../types';

type Value = string | Date | Date[];

export interface DatePickerProps extends BaseProps {
    value?: Value;
    maxDate?: Date;
    minDate?: Date;
    formatStyle?: 'small' | 'medium' | 'large';
    onChange?: (date: Date) => void;
    placeholder?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    required?: boolean;
    name?: string;
    bottomHelpText?: ReactNode;
    isCentered?: boolean;
    error?: ReactNode;
    readOnly?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: Value) => void;
    onBlur?: (event: Value) => void;
    id?: string;
    locale?: string;
    selectionType?: 'single' | 'range';
    variant?: 'single' | 'double';
}

export default function(props: DatePickerProps): JSX.Element | null;
