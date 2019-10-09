import { ComponentType, ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface VerticalSectionOverflowProps extends BaseProps {
    label?: ReactNode;
    description?: ReactNode;
    expanded?: boolean;
    assistiveText?: string;
    onToggleSection?: (event: MouseEvent<HTMLElement>) => void;
    children?: ReactNode;
}

declare const VerticalSectionOverflow: ComponentType<VerticalSectionOverflowProps>;
export default VerticalSectionOverflow;
