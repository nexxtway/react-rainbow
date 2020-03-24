import { BaseProps } from '../types';
import { ChangeEvent, ReactNode, ComponentType } from 'react';

export interface ButtonGroupPickerProps extends BaseProps {
    label: string | ReactNode;
    value: string | string[];
    onChange: (event: ChangeEvent<HTMLElement>) => void;
    multiple: boolean;
    children: ReactNode;
    name: string;
    size: string;
    error: string | ReactNode;
    bottomHelpText: string | ReactNode;
}

declare const ButtonGroupPicker: ComponentType<ButtonGroupPickerProps>;
export default ButtonGroupPicker;
