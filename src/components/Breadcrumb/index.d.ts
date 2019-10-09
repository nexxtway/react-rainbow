import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface BreadcrumbProps extends BaseProps {
    label?: ReactNode;
    href?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
}

export default function(props: BreadcrumbProps): JSX.Element | null;
