import { ComponentType, ReactNode } from 'react';
import { BaseProps, LabelAlignment } from '../types';

type Value = string | string[];
export interface ButtonGroupPickerProps extends BaseProps {
    id?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    value?: Value;
    onChange?: (value: Value) => void;
    multiple?: boolean;
    children?: ReactNode;
    name?: string;
    size?: 'x-small' | 'small' | 'medium' | 'large';
    variant?: 'default' | 'shaded';
    error?: ReactNode;
    bottomHelpText?: ReactNode;
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const ButtonGroupPicker: ComponentType<ButtonGroupPickerProps>;
export default ButtonGroupPicker;
