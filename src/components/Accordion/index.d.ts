import { ReactNode, MouseEvent, ComponentType } from 'react';
import { BaseProps } from '../types';

type Names = string[] | string;

export interface AccordionProps extends BaseProps {
    id?: string;
    children?: ReactNode;
    multiple?: boolean;
    onToggleSection?: (event: MouseEvent<HTMLElement>, name: Names) => void;
    activeSectionNames?: Names;
}

declare const Accordion: ComponentType<AccordionProps>;
export default Accordion;
