import { BaseProps } from './../types';

export interface AccordionProps extends BaseProps {
    id?: string;
    multiple?: boolean;
    // onToggleSection?: ;
    activeSectionNames?: string[] | string;
}

declare const Accordion: React.ComponentType<AccordionProps>;
export default Accordion;
