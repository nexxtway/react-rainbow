import { ComponentType, ReactNode } from 'react';
import { BaseProps } from '../types';

type Value = string | string[];
export interface ButtonGroupPickerProps extends BaseProps {
    id?: string;
    label?: ReactNode;
    value?: Value;
    onChange?: (value: Value) => void;
    multiple?: boolean;
    children?: ReactNode;
    name?: string;
    size?: 'x-small' | 'small' | 'medium' | 'large';
    error?: ReactNode;
    bottomHelpText?: ReactNode;
}

declare const ButtonGroupPicker: ComponentType<ButtonGroupPickerProps>;
export default ButtonGroupPicker;
