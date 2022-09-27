import { ReactNode, ComponentType, ChangeEvent } from 'react';
import { BaseProps, RadioOption, LabelAlignment } from '../types';

export interface RadioGroupProps extends BaseProps {
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    options?: RadioOption[];
    error?: ReactNode;
    id?: string;
    orientation?: 'vertical' | 'horizontal';
    size?: 'small' | 'medium' | 'large';
}

declare const RadioGroup: ComponentType<RadioGroupProps>;
export default RadioGroup;
