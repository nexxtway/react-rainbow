import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface CarouselCardProps extends BaseProps {
    scrollDuration?: number;
    disableAutoScroll?: boolean;
    disableAutoRefresh?: boolean;
    id?: string;
}

declare const CarouselCard: React.ComponentType<CarouselCardProps>;
export default CarouselCard;
