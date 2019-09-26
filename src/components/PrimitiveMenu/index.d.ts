import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface PrimitiveMenuProps extends BaseProps {
    menuSize?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    menuAlignment?: 'left' | 'right' | 'bottom' | 'center' | 'bottom-right' | 'bottom-left';
    isLoading?: boolean;
    title?: string;
    assistiveText?: string;
    id?: string;
    // trigger?: ;
}

declare const PrimitiveMenu: React.ComponentType<PrimitiveMenuProps>;
export default PrimitiveMenu;
