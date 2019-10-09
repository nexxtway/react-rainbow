import { ComponentType, ReactNode } from 'react';
import { BaseProps } from '../types';

export interface VerticalSectionProps extends BaseProps {
    label?: ReactNode;
    children?: ReactNode;
}

declare const VerticalSection: ComponentType<VerticalSectionProps>;
export default VerticalSection;
