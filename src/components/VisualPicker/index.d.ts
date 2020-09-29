import { ReactNode } from 'react';
import { BaseProps, VisualPickerSize } from '../types';

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
    size?: VisualPickerSize;
}

export default function(props: VisualPickerProps): JSX.Element | null;
