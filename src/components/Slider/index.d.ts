import { ReactNode, ComponentType, ChangeEvent, MouseEvent, FocusEvent } from 'react';
import { BaseProps } from './../types';

export interface SliderProps extends BaseProps {
    label?: ReactNode;
    hideLabel?: boolean;
    name?: string;
    value?: string | number;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    error?: ReactNode;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
}

declare const Slider: ComponentType<SliderProps>;
export default Slider;
