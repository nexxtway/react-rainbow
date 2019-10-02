import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface AccordionSectionProps extends BaseProps {
    disabled?: boolean;
    children?: ReactNode;
    label?: ReactNode;
    icon?: ReactNode;
    assistiveText?: string;
    name?: string;
}

declare const AccordionSection: ComponentType<AccordionSectionProps>;
export default AccordionSection;
