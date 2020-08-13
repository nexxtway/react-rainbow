import { BaseProps } from '../types';

export interface ColorPickerProps extends BaseProps {
    id?: string;
    color?: string;
    onChange?: (value: string) => void;
}

export default function(props: ColorPickerProps): JSX.Element | null;
