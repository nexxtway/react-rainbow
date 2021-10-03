import { ComponentType, ReactNode } from 'react';
import { BaseProps, LabelAlignment } from '../types';

interface Option {
    label?: ReactNode;
    value?: string;
    disabled?: boolean;
    description?: string;
}

export interface CheckboxGroupProps extends BaseProps {
    options?: Option[];
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    name?: string;
    value?: string[];
    required?: boolean;
    error?: ReactNode;
    onChange?: (values: string[]) => void;
    id?: string;
    orientation?: 'vertical' | 'horizontal';
}

declare const CheckboxGroup: ComponentType<CheckboxGroupProps>;
export default CheckboxGroup;
