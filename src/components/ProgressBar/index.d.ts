import { BaseProps } from '../types';

export interface ProgressBarProps extends BaseProps {
    value?: number;
    size?: 'x-small' | 'small' | 'medium' | 'large';
    variant?: 'brand' | 'success';
    assistiveText?: string;
}

export default function(props: ProgressBarProps): JSX.Element | null;
