import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface CardProps extends BaseProps {
    title?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
    isLoading?: boolean;
    id?: string;
}

export default function(props: CardProps): JSX.Element | null;
