import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { BaseProps } from '../types';

type Value = string | number;

export interface CodeInputProps extends BaseProps {
    id?: string;
    name?: string;
    value?: Value;
    label?: ReactNode;
    bottomHelpText?: ReactNode;
    length?: number;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    error?: ReactNode;
    tabIndex?: number | string;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onChange?: (value: Value) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function(props: CodeInputProps): JSX.Element | null;
