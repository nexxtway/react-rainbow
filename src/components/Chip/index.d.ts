import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface ChipProps extends BaseProps {
    label?: ReactNode;
    title?: string;
    variant?: 'base' | 'neutral' | 'outline-brand' | 'brand';
    onDelete?: (event: MouseEvent<HTMLElement>) => void;
}

export default function(props: ChipProps): JSX.Element | null;
