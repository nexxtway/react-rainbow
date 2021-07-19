import { ReactNode, ComponentType, ChangeEvent, MouseEvent, FocusEvent } from 'react';
import { BaseProps } from '../types';

export interface CheckboxToggleProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    value?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    id?: string;
    labelAlignment?: 'left' | 'right' | 'top';
}

declare const CheckboxToggle: ComponentType<CheckboxToggleProps>;
export default CheckboxToggle;
