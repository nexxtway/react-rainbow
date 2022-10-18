import { ReactNode, MouseEvent, FocusEvent } from 'react';
import { BaseProps, AvatarSize, MenuSize, MenuAlignment } from '../types';

export interface AvatarMenuProps extends BaseProps {
    src?: string | null;
    initials?: string | null;
    icon?: ReactNode;
    avatarSize?: AvatarSize;
    avatarBackgroundColor?: string;
    initialsVariant?: 'default' | 'inverse';
    children?: ReactNode;
    menuSize?: MenuSize;
    menuAlignment?: MenuAlignment;
    isLoading?: boolean;
    title?: string | null;
    assistiveText?: string | null;
    tabIndex?: number | string;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    id?: string;
}

export default function(props: AvatarMenuProps): JSX.Element | null;
