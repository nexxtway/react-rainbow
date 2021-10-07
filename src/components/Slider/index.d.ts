import { ReactNode, ComponentType, ChangeEvent, MouseEvent, FocusEvent } from 'react';
import { BaseProps, LabelAlignment } from './../types';

export interface SliderProps extends BaseProps {
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    name?: string;
    value?: string | number;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    error?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

declare const Slider: ComponentType<SliderProps>;
export default Slider;
