import { ReactNode, ComponentType, ChangeEvent } from 'react';
import { BaseProps, RadioOption } from '../types';

export interface RadioButtonGroupProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    value?: string;
    variant?: 'default' | 'inverse' | 'brand';
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    required?: boolean;
    options?: RadioOption[];
    error?: ReactNode;
    id?: string;
}

declare const RadioButtonGroup: ComponentType<RadioButtonGroupProps>;
export default RadioButtonGroup;
