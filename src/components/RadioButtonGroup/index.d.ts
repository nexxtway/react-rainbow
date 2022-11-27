import { ReactNode, ComponentType, ChangeEvent } from 'react';
import { BaseProps, RadioOption, LabelAlignment } from '../types';

export interface RadioButtonGroupProps extends BaseProps {
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    name?: string;
    value?: string;
    variant?: 'default' | 'inverse' | 'brand';
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    options?: RadioOption[];
    error?: ReactNode;
    id?: string;
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const RadioButtonGroup: ComponentType<RadioButtonGroupProps>;
export default RadioButtonGroup;
