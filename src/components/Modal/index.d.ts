import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface ModalProps extends BaseProps {
    title?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    footer?: ReactNode;
    isOpen?: boolean;
    onRequestClose?: () => void;
    onOpened?: () => void;
    id?: string;
    children?: ReactNode;
    hideCloseButton?: boolean;
}

declare const Modal: ComponentType<ModalProps>;
export default Modal;
