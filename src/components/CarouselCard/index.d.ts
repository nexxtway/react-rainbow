import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface CarouselCardProps extends BaseProps {
    scrollDuration?: number;
    disableAutoScroll?: boolean;
    disableAutoRefresh?: boolean;
    children?: ReactNode;
    id?: string;
}

declare const CarouselCard: ComponentType<CarouselCardProps>;
export default CarouselCard;
