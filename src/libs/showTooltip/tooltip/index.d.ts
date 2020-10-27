import { ReactNode, RefObject } from 'react';
import { TriggerElementRefFunction } from '../InternalOverlay';
import { BaseProps } from '../types';

export interface TooltipProps extends BaseProps {
    preferredPosition?: 'top' | 'bottom' | 'left' | 'right';
    isVisible?: boolean;
    triggerElementRef?: RefObject<HTMLElement> | TriggerElementRefFunction;
}

export default function(props: TooltipProps): JSX.Element | null;
