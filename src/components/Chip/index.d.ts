import { BaseProps } from './../types';

export interface ChipProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    title?: string;
    variant?: 'base' | 'neutral' | 'outline-brand' | 'brand';
    // onDelete?: ;
}

export default function(props: ChipProps): JSX.Element | null;
