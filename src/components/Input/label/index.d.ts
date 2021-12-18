import { ComponentType, ReactNode } from 'react';

export interface LabelProps {
    className?: string;
    label?: ReactNode;
    required?: boolean;
    inputId?: string;
    readOnly?: boolean;
    id?: string;
    labelAlignment?: 'left' | 'center' | 'right';
    hideLabel?: boolean;
    as?: string;
}

export default function(props: LabelProps): JSX.Element | null;
