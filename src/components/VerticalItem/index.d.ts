import { BaseProps } from './../types';

export interface VerticalItemProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    name: string;
    icon?: JSX.ElementChildrenAttribute;
    href?: string;
    notification?: JSX.ElementChildrenAttribute;
    // onClick?: ;
}

export default function(props: VerticalItemProps): JSX.Element | null;
