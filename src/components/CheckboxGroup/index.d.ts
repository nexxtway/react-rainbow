import { ComponentType, ReactNode } from 'react';
import { BaseProps } from '../types';

interface Option {
    label?: ReactNode;
    value?: string;
    disabled?: boolean;
}

export interface CheckboxGroupProps extends BaseProps {
    options?: Option[];
    label?: ReactNode;
    name?: string;
    value?: string[];
    required?: boolean;
    error?: ReactNode;
    onChange?: (values: string[]) => void;
    id?: string;
}

declare const CheckboxGroup: ComponentType<CheckboxGroupProps>;
export default CheckboxGroup;
