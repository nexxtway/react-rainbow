import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface BadgeOverlayProps extends BaseProps {
    value?: string | number;
    overlap?: 'circle' | 'rectangle';
    children?: ReactNode;
    variant?: 'brand' | 'success' | 'error' | 'warning';
    isHidden?: boolean;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function(props: BadgeOverlayProps): JSX.Element | null;
