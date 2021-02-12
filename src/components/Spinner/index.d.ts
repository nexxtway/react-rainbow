import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface SpinnerProps extends BaseProps {
    variant?: 'base' | 'brand' | 'inverse' | 'neutral';
    type?: 'circle' | 'arc';
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
    isVisible?: boolean;
    assistiveText?: string;
    children?: ReactNode;
}

export default function(props: SpinnerProps): JSX.Element | null;
