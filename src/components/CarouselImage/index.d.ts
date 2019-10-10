import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface CarouselImageProps extends BaseProps {
    src?: string;
    header?: ReactNode;
    description?: ReactNode;
    assistiveText?: string;
    href?: string;
}

declare const CarouselImage: ComponentType<CarouselImageProps>;
export default CarouselImage;
