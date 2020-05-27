import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface SidebarItemProps extends BaseProps {
    name?: string;
    label?: ReactNode;
    icon?: ReactNode;
    selectedIcon?: ReactNode;
    href?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default function(props: SidebarItemProps): JSX.Element | null;
