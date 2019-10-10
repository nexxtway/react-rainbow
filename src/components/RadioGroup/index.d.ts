import { ReactNode, ComponentType, ChangeEvent } from 'react';
import { BaseProps, RadioOption } from '../types';

export interface RadioGroupProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    required?: boolean;
    options?: RadioOption[];
    error?: ReactNode;
    id?: string;
}

declare const RadioGroup: ComponentType<RadioGroupProps>;
export default RadioGroup;
