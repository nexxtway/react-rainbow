import { BaseProps } from '../types';

export interface ProgressCircularProps extends BaseProps {
    value?: number;
    variant?: 'brand' | 'success' | 'warning' | 'error';
    color?: string;
    assistiveText?: string;
}

export default function(props: ProgressCircularProps): JSX.Element | null;
