import { BaseProps } from './../types';

export interface BreadcrumbProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    href?: string;
    // onClick?: ;
    disabled?: boolean;
}

export default function(props: BreadcrumbProps): JSX.Element | null;
