import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface DrawerProps extends BaseProps {
    title?: ReactNode;
    isOpen?: boolean;
    id?: string;
    children?: ReactNode;
    position?: 'left' | 'top' | 'right' | 'bottom';
    size?: 'small' | 'medium' | 'full';
    footer?: ReactNode;
}

declare const Drawer: ComponentType<DrawerProps>;
export default Drawer;
