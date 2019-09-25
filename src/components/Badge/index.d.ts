export interface BadgeProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    title?: string;
    variant?: 'default' | 'inverse' | 'lightest' | 'outline-brand' | 'brand';
}

export default function(props: BadgeProps): JSX.Element | null;
