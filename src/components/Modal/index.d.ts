import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface ModalProps extends BaseProps {
    title?: string | JSX.ElementChildrenAttribute;
    size?: 'small' | 'medium' | 'large';
    footer?: JSX.ElementChildrenAttribute;
    isOpen?: boolean;
    id?: string;
    // onRequestClose?: ;
    // onOpened?: ;
}

declare const Modal: React.ComponentType<ModalProps>;
export default Modal;
