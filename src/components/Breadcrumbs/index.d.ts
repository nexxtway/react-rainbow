import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface BreadcrumbsProps extends BaseProps {
    children?: ReactNode;
}

export default function(props: BreadcrumbsProps): JSX.Element | null;
