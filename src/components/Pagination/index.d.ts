import { MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface PaginationProps extends BaseProps {
    pages: number;
    activePage?: number;
    onChange?: (event: MouseEvent<HTMLElement>, page: number) => void;
    variant?: 'default' | 'shaded';
}

export default function(props: PaginationProps): JSX.Element | null;
