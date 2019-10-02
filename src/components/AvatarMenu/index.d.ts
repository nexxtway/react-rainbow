import { ReactNode, MouseEvent, FocusEvent } from 'react';
import { BaseProps, AvatarSize, MenuSize, MenuAlignment } from '../types';

export interface AvatarMenuProps extends BaseProps {
    src?: string;
    initials?: string;
    icon?: ReactNode;
    avatarSize?: AvatarSize;
    initialsVariant?: 'default' | 'inverse';
    children?: ReactNode;
    menuSize?: MenuSize;
    menuAlignment?: MenuAlignment;
    isLoading?: boolean;
    title?: string;
    assistiveText?: string;
    tabIndex?: number | string;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    id?: string;
}

export default function(props: AvatarMenuProps): JSX.Element | null;
