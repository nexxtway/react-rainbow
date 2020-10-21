import { ReactNode, ComponentType } from 'react';
import { BaseProps, VisualPickerSize, LabelAlignment } from '../types';

type Value = string[] | string;

export interface VisualPickerProps extends BaseProps {
    name?: string;
    value?: Value;
    id?: string;
    onChange?: (value: Value) => void;
    required?: boolean;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    error?: ReactNode;
    children?: ReactNode;
    multiple?: boolean;
    size?: VisualPickerSize;
}

declare const VisualPicker: React.ComponentType<VisualPickerProps>;
export default VisualPicker;
