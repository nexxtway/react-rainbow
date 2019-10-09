import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface BadgeProps extends BaseProps {
    label?: ReactNode;
    title?: string;
    children?: ReactNode;
    variant?: 'default' | 'inverse' | 'lightest' | 'outline-brand' | 'brand';
}

export default function(props: BadgeProps): JSX.Element | null;
