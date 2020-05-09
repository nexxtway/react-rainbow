import {
    ComponentType,
    ReactNode,
    ChangeEvent,
    MouseEvent,
    FocusEvent,
    ClipboardEvent,
} from 'react';
import { BaseProps } from '../types';

export interface TextareaProps extends BaseProps {
    label?: ReactNode;
    footer?: ReactNode;
    hideLabel?: boolean;
    name?: string;
    value?: string;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    grow?: boolean;
    bottomHelpText?: ReactNode;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    rows?: number;
    readOnly?: boolean;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick?: (event: MouseEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    onPaste?: (event: ClipboardEvent<HTMLTextAreaElement>) => void;
    id?: string;
}

declare const Textarea: ComponentType<TextareaProps>;
export default Textarea;
