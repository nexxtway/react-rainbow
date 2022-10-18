import { ReactNode } from 'react';
import { BaseProps, AvatarSize } from '../types';

export interface AvatarProps extends BaseProps {
    src?: string | null;
    initials?: string | null;
    icon?: ReactNode;
    size?: AvatarSize;
    avatarBackgroundColor?: string;
    initialsVariant?: 'default' | 'inverse';
    title?: string | null;
    assistiveText?: string | null;
}

export default function(props: AvatarProps): JSX.Element | null;
