import { ComponentType, MouseEvent, ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ButtonOptionProps extends BaseProps {
    name?: string;
    label?: ReactNode;
    onClick?: (event: { isSelected: boolean }) => void;
    disabled?: boolean;
}

declare const ButtonOption: ComponentType<ButtonOptionProps>;
export default ButtonOption;
