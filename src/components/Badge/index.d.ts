import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface BadgeProps extends BaseProps {
    label?: ReactNode;
    title?: string;
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?:
        | 'default'
        | 'inverse'
        | 'lightest'
        | 'outline-brand'
        | 'brand'
        | 'warning'
        | 'success'
        | 'error';
}

export default function(props: BadgeProps): JSX.Element | null;
