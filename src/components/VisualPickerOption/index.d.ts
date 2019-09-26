import { BaseProps } from './../types';

export interface VisualPickerOptionProps extends BaseProps {
    name: string;
    disabled?: boolean;
    // footer?: ;
}

export default function(props: VisualPickerOptionProps): JSX.Element | null;
