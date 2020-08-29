import { BaseProps } from '../types';
import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';

export interface ColorPickerValue {
    hex?: string;
    rgba?: Array<number>;
    hsv?: Array<number>;
}

export interface ColorPickerProps extends BaseProps {
    id?: string;
    value?: ColorPickerValue;
    defaultColors?: Array<string>;
    variant: 'default' | 'colors-fixed';
    tabIndex?: string | number;
    onChange?: (value: ColorPickerValue) => void;
}

export default function(props: ColorPickerProps): JSX.Element | null;
