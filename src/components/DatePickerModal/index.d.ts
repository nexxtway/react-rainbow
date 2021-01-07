import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface DatePickerModalProps extends BaseProps {
    id?: string;
    title?: ReactNode;
    isOpen?: boolean;
    value?: string | Date;
    maxDate?: Date;
    minDate?: Date;
    onChange?: (date: Date) => void;
    onRequestClose?: () => void;
    selectionType?: 'single' | 'range';
    variant?: 'single' | 'double';
    locale?: string;
}

export default function(props: DatePickerModalProps): JSX.Element | null;
