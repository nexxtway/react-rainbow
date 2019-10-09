import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface VisualPickerOptionFooterProps extends BaseProps {
    label?: ReactNode;
    description?: ReactNode;
}

export default function(props: VisualPickerOptionFooterProps): JSX.Element | null;
