import { BaseProps } from '../types';
import { ReactNode, FocusEvent } from 'react';

export interface FileSelectorProps extends BaseProps {
    id?: string;
    name?: string;
    label?: ReactNode;
    error?: ReactNode;
    bottomHelpText?: ReactNode;
    placeholder?: string;
    tabIndex?: string | number;
    required?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    variant?: 'inline' | 'multiline';
    hideLabel?: boolean;
    accept?: string;
    onChange?: (value: FileList) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export default function(props: FileSelectorProps): JSX.Element | null;
