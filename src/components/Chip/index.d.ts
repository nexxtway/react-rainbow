import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface ChipProps extends BaseProps {
    label?: ReactNode;
    title?: string;
    variant?: 'base' | 'neutral' | 'outline-brand' | 'brand' | 'success' | 'warning' | 'error';
    onDelete?: (event: MouseEvent<HTMLElement>) => void;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

export default function(props: ChipProps): JSX.Element | null;
