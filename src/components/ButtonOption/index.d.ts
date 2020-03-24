import { BaseProps } from '../types';
import { ReactNode, MouseEvent, ComponentType } from 'react';

export interface ButtonOptionProps extends BaseProps {
    name: string;
    label: string | ReactNode;
    onClick: (event: MouseEvent<HTMLElement>) => void;
    disabled: boolean;
}

declare const ButtonOption: ComponentType<ButtonOptionProps>;
export default ButtonOption;
