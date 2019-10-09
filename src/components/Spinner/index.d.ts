import { BaseProps } from '../types';

export interface SpinnerProps extends BaseProps {
    variant?: 'base' | 'brand' | 'inverse' | 'neutral';
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    isVisible?: boolean;
    assistiveText?: string;
}

export default function(props: SpinnerProps): JSX.Element | null;
