import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface PathStepProps extends BaseProps {
    name?: string;
    label?: ReactNode;
    hasError?: boolean;
}

export default function(props: PathStepProps): JSX.Element | null;
