import { ReactNode } from 'react';
import { BaseProps, AvatarSize } from '../types';

export interface AvatarProps extends BaseProps {
    src?: string;
    initials?: string;
    icon?: ReactNode;
    size?: AvatarSize;
    initialsVariant?: 'default' | 'inverse';
    title?: string;
    assistiveText?: string;
}

export default function(props: AvatarProps): JSX.Element | null;
