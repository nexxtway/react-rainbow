import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

type Value = {
    hex: string;
    alpha: number;
    isValid: boolean;
};

export interface ColorInputProps extends BaseProps {
    id?: string;
    value?: Value;
    defaultColors?: Array<string>;
    variant: 'default' | 'colors-fixed';
    onChange?: (value: Value) => void;
    // Input props
    name?: string;
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    placeholder?: string;
    bottomHelpText?: ReactNode;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: string | number;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

interface ColorInputInterface {
    (props: ColorInputProps): JSX.Element | null;
    toRgb: (color: Value) => [number, number, number];
    toRgba: (color: Value) => [number, number, number, number];
}
declare const ColorInput: ColorInputInterface;
export default ColorInput;
