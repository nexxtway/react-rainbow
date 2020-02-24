import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface DrawerProps extends BaseProps {
    header?: ReactNode;
    footer?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    slideFrom?: 'left' | 'right';
    isOpen?: boolean;
    onRequestClose?: () => void;
    onOpened?: () => void;
    id?: string;
    children?: ReactNode;
    hideCloseButton?: boolean;
}

export default function(props: DrawerProps): JSX.Element | null;
