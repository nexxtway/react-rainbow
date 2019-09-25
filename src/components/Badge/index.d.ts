export interface BadgeProps {
    label?: string | JSX.ElementChildrenAttribute;
    title?: string;
    variant?: 'default' | 'inverse' | 'lightest' | 'outline-brand' | 'brand';
    className?: string;
    style?: CSS.style;
}

export default function(props: BadgeProps): JSX.Element | null;
