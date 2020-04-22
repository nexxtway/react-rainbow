import { ComponentType, ReactNode, MouseEvent, FocusEvent } from 'react';
import { BaseProps } from '../types';

export interface TimeSelectInputProps extends BaseProps {
    value?: string;
    onChange?: (time: string) => void;
    label?: ReactNode;
    hideLabel?: boolean;
    required?: boolean;
    bottomHelpText?: ReactNode;
    error?: ReactNode;
    readOnly?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
    id?: string;
    hour24?: boolean;
}

declare const TimeSelectInput: ComponentType<TimeSelectInputProps>;
export default TimeSelectInput;
