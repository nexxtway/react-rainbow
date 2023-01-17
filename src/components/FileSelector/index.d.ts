import { BaseProps, LabelAlignment } from '../types';
import { ReactNode, FocusEvent } from 'react';

export interface FileSelectorProps extends BaseProps {
    id?: string;
    name?: string;
    label?: ReactNode;
    error?: ReactNode;
    uploadIcon?: ReactNode;
    bottomHelpText?: ReactNode;
    placeholder?: string;
    tabIndex?: string | number;
    required?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    variant?: 'inline' | 'multiline';
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    accept?: string;
    value?: object;
    onChange?: (value: FileList) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

export default function(props: FileSelectorProps): JSX.Element | null;
