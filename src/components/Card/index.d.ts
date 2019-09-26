import { BaseProps } from './../types';

export interface CardProps extends BaseProps {
    title?: string | JSX.ElementChildrenAttribute;
    icon?: JSX.ElementChildrenAttribute;
    actions?: JSX.ElementChildrenAttribute;
    footer?: string | JSX.ElementChildrenAttribute;
    isLoading?: boolean;
}

export default function(props: CardProps): JSX.Element | null;
