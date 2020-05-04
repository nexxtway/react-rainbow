import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

type Value = string[] | string;

export interface VisualPickerProps extends BaseProps {
    name?: string;
    value?: Value;
    id?: string;
    onChange?: (value: Value) => void;
    required?: boolean;
    label?: ReactNode;
    error?: ReactNode;
    children?: ReactNode;
    multiple?: boolean;
    size?: string;
}

declare const VisualPicker: React.ComponentType<VisualPickerProps>;
export default VisualPicker;
