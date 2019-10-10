import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface NotificationProps extends BaseProps {
    icon?: ReactNode | 'info' | 'success' | 'warning' | 'error';
    title?: ReactNode;
    description?: ReactNode;
    onRequestClose?: (event: MouseEvent<HTMLElement>) => void;
    hideCloseButton?: boolean;
}

export default function(props: NotificationProps): JSX.Element | null;
