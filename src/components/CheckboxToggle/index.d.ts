import { ReactNode, ComponentType, ChangeEvent, MouseEvent, FocusEvent } from 'react';
import { BaseProps } from '../types';

export interface CheckboxToggleProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    value?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    id?: string;
}

declare const CheckboxToggle: ComponentType<CheckboxToggleProps>;
export default CheckboxToggle;
