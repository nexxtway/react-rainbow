import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface CarouselImageProps extends BaseProps {
    src?: string;
    header?: string | JSX.ElementChildrenAttribute;
    description?: string | JSX.ElementChildrenAttribute;
    assistiveText?: string;
    href?: string;
}

declare const CarouselImage: React.ComponentType<CarouselImageProps>;
export default CarouselImage;
