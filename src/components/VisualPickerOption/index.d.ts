import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface VisualPickerOptionProps extends BaseProps {
    name?: string;
    footer?: ReactNode;
    disabled?: boolean;
    children?: ReactNode;
}

export default function(props: VisualPickerOptionProps): JSX.Element | null;
