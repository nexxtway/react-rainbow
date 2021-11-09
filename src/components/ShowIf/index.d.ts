import { ReactNode } from 'react';
import { BaseProps } from '../types';

type AnimationName = 'fade' | 'slideVertical' | 'slideHorizontal';

export interface ShowIfProps extends BaseProps {
    isTrue?: any;
    inAnimation?: AnimationName;
    outAnimation?: AnimationName;
    children?: ReactNode;
}

export default function(props: ShowIfProps): JSX.Element | null;
