import { BaseProps } from './../types';

export interface AvatarProps extends BaseProps {
    src?: string;
    initials?: string;
    icon?: JSX.ElementChildrenAttribute;
    size?: 'x-small' | 'small' | 'medium' | 'large';
    initialsVariant?: 'default' | 'inverse';
    title?: string;
    assistiveText?: string;
}

export default function(props: AvatarProps): JSX.Element | null;
