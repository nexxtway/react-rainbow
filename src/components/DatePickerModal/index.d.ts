import { ReactNode } from 'react';
import { BaseProps } from '../types';

type Value = string | Date | Date[];

export interface DatePickerModalProps extends BaseProps {
    id?: string;
    title?: ReactNode;
    isOpen?: boolean;
    value?: Value;
    maxDate?: Date;
    minDate?: Date;
    onChange?: (date: Date) => void;
    onRequestClose?: () => void;
    selectionType?: 'single' | 'range';
    variant?: 'single' | 'double';
    locale?: string;
}

export default function(props: DatePickerModalProps): JSX.Element | null;
