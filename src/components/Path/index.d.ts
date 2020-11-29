import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface PathProps extends BaseProps {
    currentStepName?: string;
    onClick?: (stepName: string) => void;
    children?: ReactNode;
    id?: string;
}

export default function(props: PathProps): JSX.Element | null;
