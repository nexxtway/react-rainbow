import { BaseProps } from './../types';

export interface AvatarMenuProps extends BaseProps {
    src?: string;
    initials?: string;
    icon?: JSX.ElementChildrenAttribute;
    avatarSize?: 'x-small' | 'small' | 'medium' | 'large';
    initialsVariant?: 'default' | 'inverse';
    title?: string;
    menuSize?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    menuAlignment?: 'left' | 'right' | 'bottom' | 'center' | 'bottom-right' | 'bottom-left';
    isLoading?: boolean;
    assistiveText?: string;
    id?: string;
    tabIndex?: number | string;
    disabled?: boolean;
}

export default function(props: AvatarMenuProps): JSX.Element | null;
