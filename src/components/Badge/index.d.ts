import React, { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface BadgeProps extends BaseProps {
    label?: ReactNode;
    title?: string;
    variant?: 'default' | 'inverse' | 'lightest' | 'outline-brand' | 'brand';
    children?: ReactNode;
}

export default function(props: BadgeProps): JSX.Element | null;
