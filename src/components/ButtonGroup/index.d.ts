import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ButtonGroupProps extends BaseProps {
    children?: ReactNode;
    variant?: 'default' | 'shaded';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

export default function(props: ButtonGroupProps): JSX.Element | null;
