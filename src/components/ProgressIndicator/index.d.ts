import { ReactNode, ComponentType, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface ProgressIndicatorProps extends BaseProps {
    currentStepName?: string;
    onClick?: (event: MouseEvent<HTMLElement>, name: string) => void;
    children?: ReactNode;
}

declare const ProgressIndicator: ComponentType<ProgressIndicatorProps>;
export default ProgressIndicator;
