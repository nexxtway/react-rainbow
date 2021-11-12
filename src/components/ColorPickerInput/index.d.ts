import { BaseProps, IconPosition, LabelAlignment } from '../types';
import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { ColorPickerValue } from '../ColorPicker';

export type ColorFormats = 'hex' | 'rgba' | 'hsv';

export interface ColorPickerInputProps extends BaseProps {
    id?: string;
    value?: ColorPickerValue;
    defaultColors?: Array<string>;
    variant: 'default' | 'colors-fixed';
    onChange?: (value: ColorPickerValue) => void;
    format?: ColorFormats;
    // Input props
    name?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    bottomHelpText?: ReactNode;
    required?: boolean;
    isCentered?: boolean;
    isBare?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: string | number;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    autoComplete?: string;
}

export default function(props: ColorPickerInputProps): JSX.Element | null;
