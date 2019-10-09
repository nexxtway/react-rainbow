import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ProgressStepProps extends BaseProps {
    name?: string;
    label?: ReactNode;
    hasError?: boolean;
}

export default function(props: ProgressStepProps): JSX.Element | null;
