import { BaseProps } from '../types';

export interface ColorPickerProps extends BaseProps {
    id?: string;
    value?: string;
    colors?: Array[string];
    tabIndex?: stirng | number;
    onChange?: (value: string) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export default function(props: ColorPickerProps): JSX.Element | null;
