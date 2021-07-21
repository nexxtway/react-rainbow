import { ComponentType, ReactNode } from 'react';
import { BaseProps, IconPosition } from '../types';

export interface OptionProps extends BaseProps {
    label?: ReactNode;
    searchableText?: string;
    name?: string | number;
    variant?: 'default' | 'header';
    icon?: ReactNode;
    iconPosition?: IconPosition;
    disabled?: boolean;
    title?: string;
    value?: any;
    component?: ComponentType;
}

export default function(props: OptionProps): JSX.Element | null;
