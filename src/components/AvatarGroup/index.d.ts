import { ReactNode } from 'react';
import { BaseProps, AvatarSize } from '../types';

interface Avatar {
    src?: string;
    initials?: string;
    icon?: ReactNode;
    title?: string;
    assistiveText?: string;
}

export interface AvatarGroupProps extends BaseProps {
    size?: AvatarSize;
    className?: string;
    style?: object;
    avatars?: Avatar[];
    maxAvatars?: number;
    showCounter?: boolean;
}

export default function(props: AvatarGroupProps): JSX.Element | null;
