import { ReactNode } from 'react';

export interface StrongPasswordInputProps extends BaseProps {
    value?: string | boolean;
    name?: string;
    label?: ReactNode;
    hideLabel?: boolean;
    placeholder?: string;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    maxLength?: number;
    minLength?: number;
    bottomHelpText?: ReactNode;
    required?: boolean;
    pattern?: string;
    isCentered?: boolean;
    isBare?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    id?: string;
    autoComplete?: string;
    passwordState?: 'poor' | 'average' | 'strong';
    passwordStateLabel?: ReactNode;
}

export default function(props: StrongPasswordInputProps): JSX.Element | null;
