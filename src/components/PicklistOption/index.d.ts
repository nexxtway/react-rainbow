import { ReactNode } from 'react';
import { BaseProps, IconPosition } from '../types';

export interface PicklistOptionProps extends BaseProps {
    label?: string;
    name?: string;
    variant?: 'default' | 'header';
    icon?: ReactNode;
    iconPosition?: IconPosition;
    disabled?: boolean;
    title?: string;
    value?: any;
}

export default function(props: PicklistOptionProps): JSX.Element | null;
