import { ReactNode, MouseEvent } from 'react';
import { BaseProps, IconPosition } from '../types';

export interface MenuItemProps extends BaseProps {
    label?: ReactNode;
    variant?: 'default' | 'header';
    icon?: ReactNode;
    iconPosition?: IconPosition;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    title?: string;
}

export default function(props: MenuItemProps): JSX.Element | null;
